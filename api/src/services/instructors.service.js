import { rolServiceFilter } from './rol.services.js'
import { userServiceFilter } from './user.services.js'
import { hassPass } from '../middlewares/encrypt.js'
import { user } from '../db/schemas/user.schema.js'

function add_rating_to(instructor) {
   if (instructor.reviews.length > 0) {
      instructor.rating = instructor.reviews.reduce((a, e) => a + e.rating, 0) / instructor.reviews.length
   }
}

export class InstructorService {
   async instructor_role_id() {
      const roles = await rolServiceFilter( 'instructors' )
      return roles[0]._id
   }

   async instructors() {
      const role_id = await this.instructor_role_id()
      const collection = await userServiceFilter( {role_id})

      collection.forEach( e => add_rating_to(e) )
      return collection
   }

   async all( params = {} ) {
      params
      
      return await this.instructors()
   }

   async find_by( params = {} ) {
      const instructor = (await this.instructors()).filter( e => e._id == params.id )[0]
      return instructor
   }

   async reviews_for( id ) {
      const instructor = await this.find_by( { id } )

      return {
         rating: instructor.rating,
         reviews: instructor.reviews
      }
   }

   async register_review_for( id, params = {}) {
      const { reviewer, rating, comment } = params
      const instructor = await this.find_by( { id } )
      instructor.reviews.push( { reviewer, rating, comment } )
      add_rating_to( instructor )
      await instructor.save()
   }

   verified( params ) {
      const { 
         firstName, lastName, email, pass, description, phone
      } = params 

      const errors = []

      if( !firstName ) errors.push( "Firstname needed")
      if( !lastName ) errors.push( "Lastname needed" )
      if( !email ) errors.push( "email needed" )
      if( !pass ) errors.push( "password needed" )

      if( 0 < errors.length ) throw new Object( {message: errors.reduce( (a,e) => a.concat(e, "\n"), "")})

      return {
         firstName: firstName.toLowerCase()
         , lastName: lastName.toLowerCase()
         , email: email.toLowerCase()
         , pass
         , description
         , phone
      }
   }

   async create( params = {} ) {
      const DEFAULT_IMAGE = "https://res.cloudinary.com/djasayobv/image/upload/v1702842963/rmryjkk8ukcdjmsrzjwq.jpg";
      const {
         firstName, lastName, email, phone, pass, description
      } = this.verified( params )
      
      const role_id =  await this.instructor_role_id()
      
      if( await user.findOne( {email, firstName, lastName}).exec() ) {
         throw new Object( {message: 'instructor is registered'} )
      }
      
      const instructor = await user.create( {
         firstName, lastName, email, phone
         , description: description || 'Instructor del gimnasio'
         , image: DEFAULT_IMAGE
         , role_id
         , pass: await hassPass( pass )
      })
      instructor.save()
      
      return instructor
   }

}
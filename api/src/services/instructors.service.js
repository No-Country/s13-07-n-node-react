import { rolServiceFilter } from './rol.services.js'
import { userServiceFilter } from './user.services.js'

function add_rating_to(instructor) {
   let rating = 0
   if (instructor.reviews.length > 0) {
      rating = instructor.reviews.reduce((a, instructor) => {
         a + instructor.rating
      }, 0) / instructor.reviews.length
   }

   instructor.rating = rating
}

export class InstructorService {

   async instructors() {
      const roles = await rolServiceFilter( 'instructors' )
      const role_id = roles[0]._id
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
      params
      const instructor = await this.find_by( { id } )
      console.info( '>>', instructor )
      instructor.reviews.push( { reviewer, rating, comment } )
      await instructor.save()
   }

   async create( params = {} ) {
      params
      throw new Object({message: 'Not implemented'})
   }

}
import { rolServiceFilter } from './rol.services.js'
import { userServiceFilter } from './user.services.js'
export class InstructorService {

   async all( params = {} ) {
      params
      const roles = await rolServiceFilter( 'instructors' )
      const role_id = roles[0]._id
      const instructors = await userServiceFilter( {role_id})
      
      instructors.forEach( e => {
         let rating = 0
         if (e.reviews.length > 0) {
            rating = e.reviews.reduce((a, e) => {
               a + e.rating
            }, 0) / e.reviews.length
         }

         e.rating = rating
      })
      
      return instructors
   }

   async create( params = {} ) {
      params
      throw new Object({message: 'Not implemented'})
   }

}
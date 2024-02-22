import { rolServiceFilter } from './rol.services.js'
export class InstructorService {

   async role_id() {
      return await rolServiceFilter( 'profesor/a' )._id
   }

   async all( params = {} ) {
      params
      const roles = await rolServiceFilter( 'instructors' )
      console.info( roles[0]._id )
      
      return roles
   }

   async create( params = {} ) {
      params
      throw new Object({message: 'Not implemented'})
   }

}
import { rol } from '../db/schemas/rol.schema.js'
import { user } from '../db/schemas/user.schema.js'
export class InstructorService {

   async all( params = {} ) {
      params
      const instructor_rol = await rol.find( { name: 'profesor/a'.toLowerCase() } )
      const instructors = await user.find( {role_id: instructor_rol.id })
      
      return instructors
   }
}
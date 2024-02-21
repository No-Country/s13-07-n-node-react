import { InstructorService } from '../services/instructors.service.js'

const instructors = new InstructorService()

export class InstructorsController {
   async index( req, res ) {
      let response = { message: 'no instructors' }
      const collection = await instructors.all() 
      
      if( collection.length > 0 ) { response = { data: collection } }
      
      res.json( response )
   }
   show( req, res ) {
      res.send( 'wip')
   }
   async create( req, res ) {
      const { firstName, lastName, email, password } = req.body

      const instructor = await instructors.create( {firstName, lastName, email, password } )

      console.info( '>>', instructor )
      res.send( 'wip' )
   }
   update( req, res ) {
      res.send( 'wip' )
   }
   destroy( req, res ) {
      res.send( 'wip' )
   }
}
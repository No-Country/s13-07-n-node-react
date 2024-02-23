import { InstructorService } from '../services/instructors.service.js'

const HOST = process.env.HOST
const PORT = process.env.PORT_SERVER

const instructors = new InstructorService()

export class InstructorsController {
   async index( req, res ) {
      let response = { message: 'no instructors' }
      const collection = await instructors.all()
      
      const data = collection.map( e => {
         return {
            id: e._id
            , firstName: e.firstName
            , lastName: e.lastName 
            , image_url: e.image_url
            , active: e.active
            , rating: e.rating || 0
            , url: `${HOST}:${PORT}/api/v1/instructors/${e._id}`
         }
      })

      if( collection.length > 0 ) { response = { data } }
      
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
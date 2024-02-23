import { InstructorService } from '../services/instructors.service.js'

const DOMAIN_NAME = process.env.HOST
const PORT = process.env.PORT_SERVER === 443 ? '' : ':'.concat(process.env.PORT_SERVER)
const HOST = DOMAIN_NAME.concat(PORT)

const instructors = new InstructorService()

function url_for(id) {
   return `${HOST}/api/v1/instructors/${id}`
}

function url_to_reviews_for(instructor_id) {
   return `${url_for(instructor_id)}/reviews`
}

function parse(instructor) {
   const { _id, firstName, lastName, image, active, rating, phone, email } = instructor
   const url = url_for(_id)
   const url_reviews = url_to_reviews_for(_id)
   return Object.assign({ id: _id }, {
      firstName, lastName, image, active, rating, phone, email
      , url
      , url_reviews
   })
}

export class InstructorsController {
   async index(req, res) {
      let response = { message: 'no instructors' }
      const collection = await instructors.all()

      if (collection.length > 0) {
         const data = collection.map(e => {
            return parse( e )
         })

         response = { data }
      }

      res.json(response)
   }

   async show(req, res) {
      let RESPONSE_CODE = 404
      const response = { message: 'instructor not found', data: null }
      const { id } = req.params
      const instructor = await instructors.find_by({ id })
      if (instructor) {
         const result = parse( instructor )
         response.data = result
         response.message = 'instructor founded'
         RESPONSE_CODE = 200
      }
      res.status(RESPONSE_CODE).json(response)
   }

   async show_reviews(req, res) {
      let RESPONSE_CODE = 404
      const response = { message: 'reviews not found', data: null }
      const { id } = req.params
      const reviews = await instructors.reviews_for(id)
      if (reviews) {
         if (reviews.rating === 0 && reviews.reviews.length === 0) {
            response.message = 'instructor has not reviews'
         } else {
            response.message = 'reviews founded'
            response.data = reviews
         }
         RESPONSE_CODE = 200
      }
      res.status(RESPONSE_CODE).json(response)
   }

   async enter_review(req, res) {
      let CODE = 404
      const response = { message: 'reviews not found' }
      const { id } = req.params
      const { reviewer, rating, comment } = req.body
      console.info('>> ENTER REVIEW FOR', id)
      console.info('>> WITH', req.body)


      try {
         await instructors.register_review_for(id, { reviewer, rating, comment })

         CODE = 204
         response.message = 'review added for instructor'
      } catch (error) {
         console.error('>> ERROR', error)
         response.message = error
      }

      console.info('>> RESPONSE', response)
      res.status(CODE).json(response)
   }

   async create(req, res) {
      const response = {
         body: {
            message: 'not implemented', data: null
         },
         status: 400
      }

      try {
         const instructor = await instructors.create( req.body )

         response.body.message = "instructor created"
         response.body.data = parse( instructor )
         response.status = 201
      } catch (error) {
         console.error('>> ERROR', error)
         if( error.message == 'instructor is registered' ) {
            response.status = 403
         }
         response.body.message = error.message
      }

      res.status( response.status ).json( response.body )
   }

   update(req, res) {
      res.send('wip')
   }
   destroy(req, res) {
      res.send('wip')
   }
}
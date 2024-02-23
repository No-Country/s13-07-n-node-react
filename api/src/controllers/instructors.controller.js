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

export class InstructorsController {
   async index(req, res) {
      let response = { message: 'no instructors' }
      const collection = await instructors.all()

      if (collection.length > 0) {
         const data = collection.map(e => {
            return {
               id: e._id
               , firstName: e.firstName
               , lastName: e.lastName
               , image_url: e.image_url
               , active: e.active
               , rating: e.rating || 0
               , url: `${url_for(e._id)}`
               , url_reviews: url_to_reviews_for(e._id)
            }
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
         const { _id, firstName, lastName, image, active, rating, phone, email } = instructor
         const url = url_for(_id)
         const url_reviews = url_to_reviews_for(_id)
         const result = Object.assign({ id: _id }, {
            firstName, lastName, image, active, rating, phone, email
            , url
            , url_reviews
         })
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
      const response = { message: 'reviews not found'}
      const { id } = req.params
      const { reviewer, rating, comment } = req.body
      console.info('>> ENTER REVIEW FOR', id)
      console.info('>> WITH', req.body)


      try {
         await instructors.register_review_for(id, { reviewer, rating, comment })

         CODE = 204
         response.message = 'review added for instructor'
      } catch (error) {
         console.error( '>> ERROR', error )
         response.message = error
      }

      console.info( '>> RESPONSE', response )
      res.status( CODE ).json( response )
   }

   async create(req, res) {
      const { firstName, lastName, email, password } = req.body

      const instructor = await instructors.create({ firstName, lastName, email, password })

      console.info('>>', instructor)
      res.send('wip')
   }
   update(req, res) {
      res.send('wip')
   }
   destroy(req, res) {
      res.send('wip')
   }
}
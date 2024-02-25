import { InstructorsController } from "../controllers/instructors.controller.js"

const instructors = new InstructorsController()

const INSTRUCTORS_PATH = '/instructors'
const AN_INSTRUCTOR_PATH = INSTRUCTORS_PATH.concat('/:id')
const REVIEW_PATH = AN_INSTRUCTOR_PATH.concat('/reviews')
export class Instructors {
   static config( router ) {
      router.get( INSTRUCTORS_PATH, instructors.index )
      router.get( AN_INSTRUCTOR_PATH, instructors.show )
      router.post( INSTRUCTORS_PATH, instructors.create )
      router.patch( AN_INSTRUCTOR_PATH, instructors.update )
      router.delete( AN_INSTRUCTOR_PATH, instructors.destroy )
      router.get( REVIEW_PATH, instructors.show_reviews )
      router.post( REVIEW_PATH, instructors.enter_review )
   }
}
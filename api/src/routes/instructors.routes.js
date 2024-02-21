import * as instructors from '../controllers/instructors.controller.js'

const INSTRUCTORS_PATH = '/instructors'
const AN_INSTRUCTOR_PATH = INSTRUCTORS_PATH.concat('/:id')
export class Instructors {
   static config( router ) {
      router.get( INSTRUCTORS_PATH, instructors.index )
      router.get( AN_INSTRUCTOR_PATH, instructors.show )
      router.post( INSTRUCTORS_PATH, instructors.create )
      router.patch( AN_INSTRUCTOR_PATH, instructors.update )
      router.delete( AN_INSTRUCTOR_PATH, instructors.destroy )
   }
}
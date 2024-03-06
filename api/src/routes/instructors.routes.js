import { InstructorsController } from "../controllers/instructors.controller.js";
import { checkSchema } from 'express-validator'

const review_post_validation = function() {
  return checkSchema( {
    reviewer: {
      trim: true
      , notEmpty: { errorMessage: 'Debe ingresar el nombre del revisor' }
      //, isAlpha: { errorMessage: 'Debe contener únicamente caracteres visible no símbolos'}
    }
    , rating: {
      trim: true
      , notEmpty: { errorMessage: 'Debe ingresar un puntaje'}
      , isInt: { 
        options: { min: 1, max: 5}
        , errorMessage: 'El puntaje debe estar entre 1 y 5'
      }
    }
    , client: {
      trim: true
      , notEmpty: { errorMessage: 'Debe ingresar el ID del cliente' }
      , isMongoId: { errorMessage: 'Debe ser un ID válido para MongoDB' }
    }
    , comment: {
      optional: true
      , trim: true
      , isLength: {
        options: { max: 150 }
        , errorMessage: 'No debe exceder los 150 caracteres'
      }
      , isAlpha: { errorMessage: 'Solo debe contener caracteres legibles' }
    }
  }, ['body'])
}

const instructors = new InstructorsController();

const INSTRUCTORS_PATH = "/instructors";
const AN_INSTRUCTOR_PATH = INSTRUCTORS_PATH.concat("/:id");
const REVIEW_PATH = AN_INSTRUCTOR_PATH.concat("/reviews");
export class Instructors {
  static config(router) {
    router.get(INSTRUCTORS_PATH, instructors.index);
    router.get(AN_INSTRUCTOR_PATH, instructors.show);
    router.post(INSTRUCTORS_PATH, instructors.create);
    router.patch(AN_INSTRUCTOR_PATH, instructors.update);
    router.delete(AN_INSTRUCTOR_PATH, instructors.destroy);
    router.get(REVIEW_PATH, instructors.show_reviews);
    router.post(REVIEW_PATH, review_post_validation(), instructors.enter_review);
  }
}

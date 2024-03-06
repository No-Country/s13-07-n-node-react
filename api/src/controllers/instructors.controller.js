import { validationResult } from "express-validator";
import { InstructorService } from "../services/instructors.service.js";

const DOMAIN_NAME = process.env.HOST;
const PORT = process.env.PORT_SERVER === 443 ? "" : ":".concat(process.env.PORT_SERVER);
const HOST = DOMAIN_NAME.concat(PORT);

const instructors = new InstructorService();

function url_for(id) {
  return `${HOST}/api/v1/instructors/${id}`;
}

function url_to_reviews_for(instructor_id) {
  return `${url_for(instructor_id)}/reviews`;
}

function parse(instructor) {
  const { _id, firstName, lastName, description, image, active, rating, phone, email } = instructor;
  const url = url_for(_id);
  const url_reviews = url_to_reviews_for(_id);
  return Object.assign(
    { id: _id },
    {
      firstName,
      lastName,
      description,
      image,
      active,
      rating,
      phone,
      email,
      url,
      url_reviews,
    },
  );
}

function parse_review( instructor_id, review ) {
  const { reviewer, rating, comment, client } = review
  const url = `${url_to_reviews_for(instructor_id)}/${client}`
  return {
    reviewer, rating, comment, client
    , url
  }
}


export class InstructorsController {
  async index(req, res) {
    let response = { message: "no instructors" };
    const collection = await instructors.all();

    if (collection.length > 0) {
      const data = collection.map((e) => {
        return parse(e);
      });

      response = { data };
    }

    res.json(response);
  }

  async show(req, res) {
    const response = {
      body: { message: "instructor not found" },
      status: 404,
    };
    const { id } = req.params;
    const instructor = await instructors.find_by({ id });
    if (instructor) {
      response.body.data = parse(instructor);
      response.body.message = "instructor found";
      response.status = 200;

      console.info(">>", response);
      console.info(">>", instructor);
    }
    res.status(response.status).json(response.body);
  }

  async show_reviews(req, res) {
    const response = {
      body: {
        message: "reviews not found",
      },
      status: 200,
    };

    const { id } = req.params;
    const reviews = await instructors.reviews_for(id);
    if (reviews) {
      if (reviews.rating === 0 && reviews.reviews.length === 0) {
        response.message = "instructor has not reviews";
      } else {
        response.body.message = "reviews found";
        response.body.data = {
          rating: reviews.rating
          , reviews: reviews.reviews.reduce((col, review) => {
            col.push( parse_review( id, review ) )
            return col;
          }, [])
        }
      }
      response.status = 200;
    }
    res.status(response.status).json(response.body);
  }

  async show_review_for( req, res ) {
    const response = {
      body: {
        message: 'review not found'
      }
      , status: 404
    }
    const result = validationResult( req )
    if( result.isEmpty() ) {
      const where = { client: req.params.client }
      try {
        const review = await instructors.reviews_for(req.params.id, where)
        response.body.message = 'review found'
        response.body.data = parse_review(req.params.id, review.reviews[0])
        response.status = 200
      } catch (error) {
        response.status = 400
        response.body.message = error.message
      }
    } else {
      console.log( '>> Review for', result.array() )
    }


    res.status( response.status ).json( response.body )
  }

  async enter_review(req, res) {
    const response = {
      body: { message: 'could not be processed' },
      status: 400,
    };
    
    const result = validationResult( req )
    if (result.isEmpty()) {
      const { id } = req.params;
      const { reviewer, rating, comment, client } = req.body;


      try {
        await instructors.register_review_for(id, { reviewer, rating, comment, client });

        response.body.message = "review added for instructor";
        response.status = 201;
      } catch (error) {
        console.error(">> ERROR", error);
        response.body.message = error;
      }
    } else {
      response.body.errors = result.array().reduce( (a, e) => {
        a.push( e.msg ); return a;
      }, [])
    }

    res.status(response.status).json(response.body);
  }

  async update_review_for( req, res ) {
    const { id, client_id } = req.params

    const response = {
      status: 400,
      body: {
        message: 'can not processed'
      }
    }
  
    const result = validationResult( req )
    if( !result.isEmpty() || !id || !client_id ) {
      console.log( '>> PUT REVIEW', id, client_id )
      response.body.errors = result.array().map( e => e.msg )
      return res.status( response.status ).json( response.body )
    }

    try {
      const { reviewer, rating, comment, client } = req.body
      if( client != client_id ) throw new Object( {message: 'client id not match'} )
      const params = {
        id, client_id, reviewer, rating, comment, client
      }
      await instructors.update_review_for(params)
      response.status = 204
      response.body = null

    } catch (error) {
      console.error( '>> PUT REVIEW', error )
      response.body.message = error
    }

    res.status( response.status ).json( response.body )
  }

  async create(req, res) {
    const response = {
      body: {
        message: "not implemented",
      },
      status: 400,
    };

    try {
      const instructor = await instructors.create(req.body);

      response.body.message = "instructor created";
      response.body.data = parse(instructor);
      response.status = 201;
    } catch (error) {
      console.error(">> ERROR", error);
      if (error.message == "instructor is registered") {
        response.status = 403;
      }
      response.body.message = error.message;
    }

    res.status(response.status).json(response.body);
  }

  update(req, res) {
    res.send("wip");
  }
  destroy(req, res) {
    res.send("wip");
  }
}

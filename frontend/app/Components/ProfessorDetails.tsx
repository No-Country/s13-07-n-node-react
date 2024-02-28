/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useState } from 'react'
import X from "../../public/x.png"
import start from "../../public/star.png"
import { useRouter } from 'next/navigation';
import Loader from './Loader';
import { urlAPi } from '../utils/urlBase';
import { useFetchDataGet } from '../utils/useFetchDataGet';
import ReviewsProfessor from './ReviewsProfessor';
import StarRating from './StarRating';
import CommentProfessor from './CommentProfessor';


function ProfessorDetails({ params }: { params: {profesor: string;}}) {
  const calificacion = ["profesor","puntaje", "gracias"];
  const  [flujo, setFlujo] = useState(calificacion[0])
  const router = useRouter();
  const urlToFetch = `${urlAPi}/instructors/${params.profesor}`;
  const {data, isLoading, error} = useFetchDataGet(urlToFetch);
  const [showReviews, setShowReviews] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [ratingProfessor, setRatingProfessor] = useState<number>(0);


  if (isLoading) return <div className='flex items-center justify-center h-screen'><Loader/></div> ;
  if (error) return <p className='flex items-center justify-center h-screen'>Error: {error}</p>;
  if (!data) return <p className='flex items-center justify-center h-screen'>No profile data</p>;

  console.log(ratingProfessor);
  return (
    <div className={`w-full h-full  fixed  left-0 right-0 bottom-0 top-0`}>
      {showComment === true &&(<CommentProfessor closeModal={()=>{setShowComment(false)}} />)}
      {showReviews === true &&(<ReviewsProfessor closeModal={()=>{setShowReviews(false)}} />)}
      <button onClick={()=> {router.push('/Profesores')}} >
        <Image src={X} alt="x" className="w-[24px] h-[24px] absolute right-5 top-5" />
      </button>
      <div className="w-full  absolute bottom-0 right-0 left-0">
        {
          flujo === calificacion[0] && (
          <><img src={data.data.image} alt="profesor" className="w-full" />
          <div className="w-full p-[20px] h-full bg-black">
              <div className="flex justify-between items-center">
                <h3 className="text-[24px]">{data.data.firstName} {data.data.lastName}</h3>
                
                <p className="flex justify-between items-center">
                    <span className="flex items-center">{data.data.rating}</span>
                    <Image className="mx-1" src={start} alt="start" /> 
                </p>
                
              </div>
              <div>
                <button onClick={()=>{setShowReviews(!showReviews)}} className='cursor-pointer text-primaryDefault font-semibold text-right w-full'>Ver reseñas</button>
                <p className="mt-[30px] font-semibold  whitespace-nowrap overflow-hidden text-overflow-ellipsis w-full">
                  {data.data.description}
                </p>
                <button onClick={() => { setFlujo(calificacion[1]); } } type="button" className="mt-[12px] text-white w-full focus:outline-none  bg-primaryDefault hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                  Calificar Profesor
                </button>
              </div>
            </div>
          </>
        )
      }

      {
        flujo === calificacion[1] && (
          <div className="w-full p-[20px] h-full bg-black">
              <div className="flex justify-between items-center">
                <h3 className="text-[24px]">{data.data.firstName} {data.data.lastName}</h3>
                <p className="flex justify-between items-center"><span className="flex items-center">{data.data.rating}</span> <Image className="mx-1" src={start} alt="start" /> </p>
              </div>
              <div>
                <p className="mt-[30px]">
                  <p className="flex justify-center items-center">
                    <StarRating ratingProfessor={ratingProfessor} onRatingChange={setRatingProfessor}/>
                  </p>
                  <p onClick={()=>{setShowComment(!showComment)}} className="mt-[36px] font-semibold">Deja un comentario</p>
                </p>
                <button onClick={() => { setFlujo(calificacion[2]); } } type="button" className="mt-[36px] text-white w-full focus:outline-none  bg-primaryDefault hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                  Enviar
                </button>
              </div>
          </div>
        )
      }

      {
        flujo === calificacion[2] && (
          <div className="w-full p-[20px] h-full bg-black">
              <div>
                <p className="mt-[30px] mb-[44px] text-center font-semibold">
                  Gracias por calificar a {data.data.firstName} {data.data.lastName}
                </p>
                <button onClick={() => {  router.push('/Profesores')   } } type="button" className="mt-[12px] text-white w-full focus:outline-none  bg-primaryDefault hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                  Continuar
                </button>
              </div>
          </div>
        )
      }
        
      </div>
    </div>
  );
}

export default ProfessorDetails;
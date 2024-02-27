import React from 'react'
import CardProfessor from './CardProfessor'
import professor2 from "../../public/Rectangle 4 (1).png";
import { urlAPi } from '../utils/urlBase';
import { useFetchDataGet } from '../utils/useFetchDataGet';

function CardContainerProfessor() {
    //ahora vamos a pedir el total de profesores
    const urlToFetch = `${urlAPi}/instructors`;
    const {data, isLoading, error} = useFetchDataGet(urlToFetch);
    //console.log(data, isLoading, error)
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return <p>No profile data</p>;

  return (
  
    <div className='w-[100%] grid grid-cols-12 mt-[24px]'>
      {
        data.data.map((profesor: any, key: React.Key | null | undefined)=>{
          console.log(profesor)
          const {firstName, active, rating, image} =  profesor;
          return(
            <div  key={key} className='col-span-6 flex justify-center items-center mt-[0.8rem]'>
              <CardProfessor  rate={rating} image={image} name={firstName} available={active}/>
            </div>
          )
        })
      }
    </div>
    
    
  )
}

export default CardContainerProfessor;
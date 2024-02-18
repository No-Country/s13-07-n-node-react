import React, { useEffect, useState } from 'react'
import CardProfessor from './CardProfessor'
import professor1 from "../../public/Rectangle 4.png";
import professor2 from "../../public/Rectangle 4 (1).png";
import CardActivities from './CardActivities';

function CardContainer({link}:{link:string}) {

  return (
    <div>
      {link === "Profesores" && (
        <div className='w-[100%] grid grid-cols-12 mt-[24px]'>
          <div className='col-span-6 flex justify-center items-center mt-[0.8rem]'>
              <CardProfessor  rate={4.6} image={professor2} name="Julian Alvarez" available={true}/>
          </div>
          <div className='col-span-6 flex justify-center items-center mt-[0.8rem]'>
              <CardProfessor rate={4.6} image={professor1} name="Mara Gomez" available={true}/>
          </div>
          <div className='col-span-6 flex justify-center items-center mt-[0.8rem]'>
              <CardProfessor rate={4.6} image={professor2} name="Julian Alvarez" available={true}/>
          </div>
        </div>
      )}
      {
        link === "Actividades" && (

          <div className='w-[100%] grid grid-cols-12 mt-[24px] gap-x-4 gap-y-2'>
            <div className='col-span-6 flex justify-center items-center mt-[0.5rem]'>
              <CardActivities/>
            </div>
            <div className='col-span-6 flex justify-center items-center mt-[0.5rem]'>
              <CardActivities/>
            </div>
            <div className='col-span-6 flex justify-center items-center mt-[0.5rem]'>
              <CardActivities/>
            </div>
            <div className='col-span-6 flex justify-center items-center mt-[0.5rem]'>
              <CardActivities/>
            </div>
        </div>
        )
      }
    </div>
    
  )
}

export default CardContainer
import React, { useEffect, useState } from 'react'
import CardProfessor from './CardProfessor'
import professor1 from "../../public/Rectangle 4.png";
import professor2 from "../../public/Rectangle 4 (1).png";
import CardActivities from './CardActivities';
import SlideUpComponent from './SlideUpComponent';


function CardContainer({link}:{link:string}) {

  const [professorDetail, setProfessorDetail] = useState({})
  const [isVisible, setIsVisible] = useState(false);

  const showDetails =({rate, image, name, available}:any)=>{
    //console.log({rate, image, name, available})
    setProfessorDetail({rate, image, name, available})
    setIsVisible(true)
  }

  useEffect(()=>{

    setProfessorDetail({})
    setIsVisible(false)
  }, [])
  

  return (

    <div>
      {link === "Profesores" && (
        <div className='w-[100%] grid grid-cols-12 mt-[24px]'>
          <div className='col-span-6 flex justify-center items-center mt-[0.8rem]'>
              <CardProfessor onShowDetails={showDetails}  rate={4.6} image={professor2} name="Julian Alvarez" available={true}/>
          </div>
          <div className='col-span-6 flex justify-center items-center mt-[0.8rem]'>
              <CardProfessor onShowDetails={showDetails} rate={4.6} image={professor1} name="Mara Gomez" available={true}/>
          </div>
          <div className='col-span-6 flex justify-center items-center mt-[0.8rem]'>
              <CardProfessor onShowDetails={showDetails} rate={4.6} image={professor2} name="Julian Alvarez" available={true}/>
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
      
      {isVisible &&  <SlideUpComponent professorDetail={professorDetail} slideDown={()=> setIsVisible(false)}  />}
      

    </div>
    
  )
}

export default CardContainer
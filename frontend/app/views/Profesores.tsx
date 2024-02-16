import React from 'react'
import Header from '../Components/Header';
import SectionButton from '../Components/SectionButton';

const Profesores = () => {
  return (
    <div className='w-full px-[16px] pt-[32px]'>
        <Header/>
        <SectionButton section='Profesores' active={false} description='Conoce a los profesores de tu sede' />
        
    </div>
  )
}

export default Profesores;
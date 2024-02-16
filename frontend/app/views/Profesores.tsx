import React from 'react'
import Header from '../Components/Header';
import SectionButton from '../Components/SectionButton';
import CardContainer from '../Components/CardContainer';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Profesores = () => {
  return (
    <div className='w-full px-[16px] pt-[32px]'>
        <Header/>
        <Navbar/>
        <SectionButton section='Profesores' active={false} description='Conoce a los profesores de tu sede' />
        <CardContainer link='Profesores'/>
        <Footer/>
    </div>
  )
}

export default Profesores;
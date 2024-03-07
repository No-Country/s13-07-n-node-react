"use client"
import React from 'react'
import Header from '../../Components/Header';
import SectionButton from '../../Components/SectionButton';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import GlobalContainer from '../../Components/GlobalContainer';
import CardContainerProfessor from '../../Components/CardContainerProfessor';



const Profesores = () => {
  return (
    <div>
      <GlobalContainer>
        <Header/>
        <Navbar/>
        <SectionButton section='Profesores' active={false} description='Conoce a los profesores de tu sede' />
        <CardContainerProfessor/>
      </GlobalContainer>
      <Footer/>
    </div>
    
  )
}

export default Profesores;

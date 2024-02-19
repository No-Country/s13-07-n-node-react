"use client"
import React from 'react'
import Header from '../Components/Header';
import SectionButton from '../Components/SectionButton';
import CardContainer from '../Components/CardContainer';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import GlobalContainer from '../Components/GlobalContainer';

const Profesores = () => {
  return (
    <GlobalContainer>
        <Header/>
        <Navbar/>
        <SectionButton section='Profesores' active={false} description='Conoce a los profesores de tu sede' />
        <CardContainer link='Profesores'/>
        <Footer/>
    </GlobalContainer>
  )
}

export default Profesores;
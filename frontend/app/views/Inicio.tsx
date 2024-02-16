"use client"
import React from 'react'
import CardClient from "../Components/CardClient";
import Header from '../Components/Header';
import SectionButton from '../Components/SectionButton';
import CardContainer from '../Components/CardContainer';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import GlobalContainer from '../Components/GlobalContainer';


const Inicio = () => {
  return (
    <GlobalContainer>
        <Header/>
        <div className="mt-[36px]">
            <h1 className="text-[16px] h-[19px] font-[sans]">Bienvenido a Spotter</h1>
            <p className="text-[9px] mt-[0.2rem]">¡Nuevos desafios te esperan!</p>
        </div>
        <CardClient/>
        <div>
          <SectionButton active={true} section={"Profesores"} description={"Accede a los profesores de tu sede"} />
          <CardContainer link='Profesores'/>
        </div>

        <div>
          <SectionButton active={true} section={"Actividades"} description={"Distintas actividades y clases que ofrece tu gimnasio"} />
          <CardContainer link='Actividades'/>
        </div>
        <Navbar/>
        <Footer/>
    </GlobalContainer>
  )
}

export default Inicio;
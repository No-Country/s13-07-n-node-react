"use client"
import React from 'react'
import CardClient from "../Components/CardClient";
import Header from '../Components/Header';
import SectionButton from '../Components/SectionButton';
import CardContainer from '../Components/CardContainer';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';


const Inicio = () => {
  return (
    <div className='w-[100%] px-[16px] pt-[32px]'>
        <Header/>
        <div className="mt-[36px]">
            <h1 className="text-[16px] h-[19px] font-[sans]">Bienvenido a Spotter</h1>
            <p className="text-[9px] mt-[0.2rem]">¡Nuevos desafios te esperan!</p>
        </div>
        <CardClient/>
        <div>
          <SectionButton section={"Profesores"} description={"Accede a los profesores de tu sede"} active/>
          <CardContainer link='Profesores'/>
        </div>

        <div>
          <SectionButton section={"Actividades"} description={"Distintas actividades y clases que ofrece tu gimnasio"} active />
          <CardContainer link='Actividades'/>
        </div>
        <Navbar/>
        <Footer/>
    </div>
  )
}

export default Inicio;
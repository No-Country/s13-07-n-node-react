"use client"
import React from 'react'
import CardClient from "../Components/CardClient";
import Header from '../Components/Header';



const Inicio = () => {
  return (
    <div className='w-[100%] px-[16px] pt-[32px]'>
        <Header/>
        <div className="mt-[36px]">
            <h1 className="text-[16px] h-[19px] font-[sans]">Bienvenido a Spotter</h1>
            <p className="text-[9px] mt-[0.2rem]">¡Nuevos desafios te esperan!</p>
        </div>
        <CardClient/>
    </div>
  )
}

export default Inicio;
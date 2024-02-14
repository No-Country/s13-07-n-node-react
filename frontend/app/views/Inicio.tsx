"use client"
import Image from "next/image"
import logo from "../../public/Frame 145 1.svg";
import campana from "../../public/bell-outline.svg"
import React from 'react'
import CardClient from "../Components/CardClient";



const Inicio = () => {
  return (
    <div className='w-[100%] px-[16px] pt-[32px]'>
        <div id='logo' className='flex justify-between items-center'>
            <div>
                <Image className="w-[124px]" src={logo} alt={"logo"} />
            </div>
            <div>
                <Image className="w-[24px]" src={campana} alt={"campana"} />
            </div>
        </div>
        <div className="mt-[36px]">
            <h1 className="text-[16px] h-[19px] font-[sans]">Bienvenido a Spotter</h1>
            <p className="text-[9px] mt-[0.2rem]">¡Nuevos desafios te esperan!</p>
        </div>
        <CardClient/>
    </div>
  )
}

export default Inicio;
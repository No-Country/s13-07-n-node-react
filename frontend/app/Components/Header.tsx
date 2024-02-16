"use client"
import Image from 'next/image'
import React from 'react'
import logo from "../../public/Frame 145 1.svg";
import campana from "../../public/bell-outline.svg"
import { usePathname } from 'next/navigation'
import avatar from "../../public/Roberta Casas.png"
const Header = () => {


  const currentUrl = usePathname()
  // Accede a la propiedad pathname del objeto router para obtener la ruta actual
    console.log(currentUrl)
  return (
    <div id='logo' className='flex justify-between items-center'>
        <div>
            <Image className="w-[124px]" src={logo} alt={"logo"} />
        </div>
        <div className='flex items-center justify-between'>
            
            <Image className='w-[24px] h-[24px] rounded-full mr-3' src={avatar} alt='avatar'/>
            <Image className="w-[24px]" src={campana} alt={"campana"} />
        </div>
    </div>
  )
}

export default Header
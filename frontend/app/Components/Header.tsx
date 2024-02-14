import Image from 'next/image'
import React from 'react'
import logo from "../../public/Frame 145 1.svg";
import campana from "../../public/bell-outline.svg"
const Header = () => {
  return (
    <div id='logo' className='flex justify-between items-center'>
        <div>
            <Image className="w-[124px]" src={logo} alt={"logo"} />
        </div>
        <div>
            <Image className="w-[24px]" src={campana} alt={"campana"} />
        </div>
    </div>
  )
}

export default Header
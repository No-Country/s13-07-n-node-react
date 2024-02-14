import Image from 'next/image';
import React from 'react'
import flecha from "../../public/Arrow - Right 2.svg";


function SectionButton({section, description}:{section:string, description:string}) {
  return (
    <div className='w-[100%] flex justify-between items-center mt-[24px]'>
        <div>
            <h2 className='text-[16px] font-medium'>{section}</h2>
            <p className='text-[9px] font-light'>{description}</p>
        </div>
        <div>
            <Image className='w-[24px] h-[24px]' src={flecha} alt='arrow' />
        </div>
    </div>
  )
}

export default SectionButton;
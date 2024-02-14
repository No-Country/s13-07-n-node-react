import React from 'react';
import backgroundImage from "../../public/Rectangle 2.png";
import Image from 'next/image';
import avatar from "../../public/Roberta Casas.png"
import megatlon from "../../public/image 1.png";
import codigoBarras from "../../public/Frame.png"


const CardClient = () => {
    
    return (
    <div className='w-[328px] h-[146px] mt-[24px] relative'>
        <Image src={backgroundImage} alt='background-image' />
        <div className='absolute top-0 left-0 right-0 bottom-0'>
            <div className='w-full h-full grid grid-cols-12'>
                    <div className="col-span-4 flex justify-center items-center">
                    <Image className='w-[74px]' src={avatar} alt={"avatar"} />
                </div>
                <div className="col-span-4  flex flex-col justify-center">
                    <div className='my-[0.2rem]'>
                        <h2 className='font-bold text-[12px]'>Nombre</h2>
                        <p className='text-[10px]'>Paula Mendoza</p>
                    </div>
                    <div className='my-[0.2rem]'>
                        <h2 className='font-bold text-[12px]'>Vencimiento</h2>
                        <p className='text-[10px]'>12/2024</p>
                    </div>
                    <div className='my-[0.2rem]'>
                        <h2 className='font-bold text-[12px]'>Codigo Cliente</h2>
                        <p className='text-[10px]'>123456</p>
                    </div>
                    
                </div>
                <div className="col-span-4 flex flex-col justify-between items-end px-[13px] py-[14px]">
                    <Image className='w-[56px]' src={megatlon} alt='megatlon' />
                    <Image className='w-[113px]' src={codigoBarras} alt='megatlon' />
                </div>
            </div>
        </div>
    </div>
  )
}
export default CardClient
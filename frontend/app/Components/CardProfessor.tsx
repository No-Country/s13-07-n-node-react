/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useState } from 'react';
import disponible from "../../public/Ellipse 26.png";;
import estrella from "../../public/star.png";
import Link from 'next/link';


function CardProfessor({image, name, available, rate, }:{image:any, name:string, available:boolean, rate:number}) {
    return (
        <div className='w-[152px] h-[158px] rounded-[20px] relative pointer'  >
            <Link href={`/Profesores/${name}`} >
            <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full flex justify-between items-end p-[0.5rem]'>
                <div>
                    <h2>{name}</h2>
                    <div>
                        {available === true ? (
                        <div className='flex justify-start items-center'>
                            <Image className='ml-[4px]' src={disponible} alt='disponible' />
                            <p className='text-[8px] mx-[4px]'>Disponible en la sede</p>
                        </div>
                        ) : (<p className='text-[8px] mx-[4px]'>No Disponible en la sede</p>)}
                    </div>
                </div>
                <div className='flex justify-start items-center'>
                    <p className='text-[10px]'>{rate}</p>
                    <Image className='w-[7px] h-[7px] ml-1' alt='rate' src={estrella}/>
                </div>
            </div>
            </Link>
            <img  alt='professor' src={image} />
        </div>
    )
}

export default CardProfessor;
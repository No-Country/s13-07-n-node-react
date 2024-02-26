"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import tuerca from "../../public/cog-outline.png";
import avatar from "../../public/Roberta Casas.png";
import { useGlobalStore } from '../store/GlobalStore';

interface ImageState {
  file: File | null;
  url: string | null;
}

const ChangePhoto = () => {
    const [imagen, setImagen] = useState<ImageState>({ file: null, url: null });
    const {user} = useGlobalStore<any>((state)=> state)

    const seleccionarImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
        const file = e.target.files[0];
        setImagen({
            file,
            url: URL.createObjectURL(file),
        });
        // Aquí puedes manejar la imagen seleccionada, como mostrar una vista previa
        }
  };

    
    const cambiarFoto = () => {
        document.getElementById('input-file')?.click();
    };

  return (
    <div className='w-full '>
        <div>
            <Image className='w-[96px] h-[96px]' width={96} height={96} src={tuerca} alt='tuerca' />
        </div>
        <div>
            <Image src={avatar} alt='avatar' />
            <h2>{user.firstName} {user.lastName} </h2>
            
        </div>
        <div>
            <input
                type="file"
                id="input-file"
                name="myImage"
                onChange={seleccionarImagen}
                style={{ display: 'none' }}
            />
            <button onClick={cambiarFoto}>Cambiar foto</button>
            {/* Aquí puedes mostrar una vista previa de la imagen si es necesario */}
            {imagen.url && <Image width={20} height={20} src={imagen.url} alt="Vista previa" />}
    </div>
    </div>
  )
}

export default ChangePhoto;
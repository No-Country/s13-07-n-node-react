import Image from "next/image";

import flecha from "../../public/Arrow - Right 2.svg";
import Bookmark from "../../public/Bookmark.svg";

const CardRutinas = ({imagen, tiempo, calorias, active = false, ejercicio = ''}: {imagen: any, tiempo: number, calorias: number, active: boolean, ejercicio: string}) => {
    return (
        <div className='relative mt-2 w-40'>
            <Image src={imagen} alt='img rutina' />
            <div className='absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between'>
                <div className="flex flex-col gap-2" >
                    <p className='text-[11px] font-bold'>{ejercicio}</p>
                    <p className='text-[11px] font-light'>{tiempo} min.</p>
                    <p className='text-[11px] font-light'>{calorias} Cal.</p>
                </div>
                {!active && <Image className='w-7' src={Bookmark} alt='bookmark' />}
                <Image className='w-8' src={flecha} alt='arrow' />
            </div>
        </div>
    );
};

export default CardRutinas;
 
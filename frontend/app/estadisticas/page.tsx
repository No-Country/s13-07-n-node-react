'use client';
import Image from 'next/image';
import logo from '../../public/spooter-logo.svg';
import profilePic from '../../public/profile-icon.svg';
import arrowRigth from '../../public/Arrow - Right 2.svg';
import arrowDown from '../../public/arrow-down.svg';
import arrowDownWhite from '../../public/arrow-down-white.svg';
import CardActivity from '../Components/ui/ChartMixedIco';
import Navbar from '../Components/Navbar';
import Grafic1 from '../Components/Grafic1';
import Grafic2 from '../Components/Grafic2';

export default function Estadisticas() {
  return (
    <div>
      <header className='flex justify-between items-center p-6 '>
        <Image src={logo} alt='Logo' width={107} height={31} />
        <div className='flex items-center'>
          <Image
            src={profilePic}
            alt='Profile Picture'
            className='rounded-full'
            width={40}
            height={40}
          />
        </div>
      </header>
      <main className='p-6'>
        <div className='flex justify-between items-center mb-8'>
          <div className='h-8'>
            <h2 className='text-2xl font-bold '>Tu rendimiento</h2>
            <p className='mb-6 text-xs'>
              Basado en los ejercicios completados esta semana
            </p>
          </div>
          <Image
            src={arrowRigth}
            alt='arrow-rigth'
            className='ml-4'
            width={30}
            height={30}
          />
        </div>
        <div className='flex justify-between mb-6 text-center'>
          <h2
            className='text-sm text-primaryDefault rounded-custom1 border-1.5 border-solid border-primaryDefault py-2.5 px-5 h-10 flex-grow flex justify-center items-center hover:bg-primaryDefault hover:text-white'
            style={{ flexBasis: '33.33%' }}
          >
            Día
          </h2>
          <h2
            className='bg-primaryDefault text-sm text-white border-1.5 border-solid border-primaryDefault py-2.5 px-5 h-10 flex-grow flex justify-center items-center hover:bg-primaryDefault hover:text-white'
            style={{ flexBasis: '33.33%' }}
          >
            Semana
          </h2>
          <h2
            className='text-sm text-primaryDefault rounded-custom2 border-1.5 border-solid border-primaryDefault py-2.5 px-5 h-10 flex-grow flex justify-center items-center hover:bg-primaryDefault hover:text-white'
            style={{ flexBasis: '33.33%' }}
          >
            Mes
          </h2>
        </div>

        <div>
          <Grafic1 />
        </div>
        <div>
          <div>
            <h2 className='text-base'>Objetivos</h2>
            <p className='text-xs mb-2'>Seguí tus avances</p>
          </div>
          <div className='bg-gray900 h-20 p-3 rounded-3xl h-custom backdrop-blur-md'>
            <div className='flex justify-between items-center '>
              <h2 className='text-base'>Peso</h2>
              <Image
                src={arrowRigth}
                alt='arrow*-rigth'
                width={24}
                height={24}
              />
            </div>
            <div className='flex justify-between items-center'>
              <h1 className='text-28 text-primaryDefault'>65.2Kg</h1>
              <p className='text-sm text-primaryLigth'>-1 Kg ult. sem.</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <h2> Estadisticas de entrenamiento</h2>
            <div className='flex justify-start items-center gap-4'>
              <h2 className='text-primaryDefault'>31 Nov - 31 Dec</h2>
              <Image src={arrowDown} alt='arrow-down' />
            </div>
          </div>
          <h2 className='text-center bg-gray900 h-8 w-8 rounded-lg'>...</h2>
        </div>
        <div className='p-4 '>
          <Grafic2 />
        </div>
        <div className='flex justify-between items-center gap-4'>
          <h2 className='text-'>Ultima Semana</h2>
          <Image src={arrowDownWhite} alt='arrow-down' />
        </div>
        <div>
          <h2>Ultima Semana</h2>
        </div>
      </main>
      <Navbar />
    </div>
  );
}

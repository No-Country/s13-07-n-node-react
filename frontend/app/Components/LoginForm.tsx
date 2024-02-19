'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import spotterLogo from '../../public/spooter-logo.svg';
import mailIcon from '../../public/mail-icon-input.svg';
import Loader from "../Components/Loader";

export default function LoginForm() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    // lógica para iniciar sesión
    // ...
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      {!showForm && (
        <div className='bg-#1E1E1E'>
          <Image
            className='w-[124px] text-white'
            src={spotterLogo}
            alt={'logo'}
          />
        </div>
      )}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className='bg-black text-white p-4 sm:p-6 md:p-8 lg:p-10'
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className='flex justify-center mb-40'>
                <Image src={spotterLogo} alt='logo' />
              </div>
              <h2 className='mb-6'>Inicia Sesión</h2>
              <label htmlFor='email' className='mb-2'>
                Correo Electrónico
              </label>
              <div className='relative'>
                <input
                  type='email'
                  id='email'
                  className='text-primaryDefault bg-gray-800 mb-4 p-2 border-none rounded-lg w-full pl-10 border border-gray-300'
                  value={'name@spotter.com'}
                />
                <div className='absolute left-2 top-1/3 transform -translate-y-1/2'>
                  <Image src={mailIcon} alt='Imagen' width={20} height={20} />
                </div>
              </div>

              <label htmlFor='password' className='mb-2 '>
                Contraseña
              </label>
              <input
                type='password'
                id='password'
                className='mb-4 p-2 border-none rounded-lg w-full text-primaryDefault bg-gray-800'
                value={'**********'}
              />
              <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center mb-4'>
                  <input
                    type='checkbox'
                    id='remember'
                    className='form-checkbox mr-2 text-gray700'
                  />
                  <label htmlFor='remember'>Recordarme</label>
                </div>

                <p className='mb-4 no-underline text-primaryLigth'>
                  Recuperar contraseña
                </p>
              </div>
              <button
                type='submit'
                className='p-2 bg-primaryDefault text-white rounded-md w-full '
              >
                Confirmar
              </button>
              <h2 className='text-gray-500 mt-4'>
                No estas registrado?
                <span className='text-primaryLigth '> Crear Cuenta</span>
              </h2>
            </>
          )}
        </form>
      )}
    </div>
  );
}
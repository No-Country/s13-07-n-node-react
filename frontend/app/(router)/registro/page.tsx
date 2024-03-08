'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import spotterLogo from '../../../public/spooter-logo.svg';
import mailIcon from "../../../public/mail-icon-input.svg";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'
import { login } from '@/app/utils/inicioSesion';
import Loader from '@/app/Components/Loader';
import { useGlobalStore } from '@/app/store/GlobalStore';
import Link from 'next/link';



export default function RegisterForm() {
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false)
    const router = useRouter()
    const {setUser, setRolUser, rolUser, isAuthClient, setIsAuthClient} = useGlobalStore((state) => state)
  
    useEffect(() => {
        const timer = setTimeout(() => {
        setShowForm(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);



    const validationSchema = Yup.object({
        firstName: Yup.string().required("El nombre es requerido"),
        lastName: Yup.string().required("El apellido  es requerido"),
        phone: Yup.string().required("El telefono es requerido"),
        email: Yup.string()
        .email('Ingrese un email válido')
        .required('El email es requerido'),
        pass: Yup.string()
        .min(8, 'La contraseña debe tener al menos  8 caracteres')
        .max(12,"la contraseña debe ser igual o menor a 12 caracteres")
        .required('La contraseña es requerida'),
        role_id: Yup.string(),
    });

    let storedEmail:any;
    let storedpass:any;
    if (typeof window !== 'undefined') {
        storedEmail = JSON.parse(localStorage.getItem('user-spotter-email') || "{}")
        storedpass = JSON.parse(localStorage.getItem('user-spotter-pass') || "{}")
    }


  const formik = useFormik({
    initialValues:{
      email: typeof storedEmail === "object" ? "" : storedEmail,
      pass: typeof storedpass === "object" ? "" : storedpass,
      firstName:"",
      lastName:"",
      phone:"",
    },
    validationSchema,
    onSubmit: async  (values, {resetForm}) => {
      
        if (rememberMe) {
          // Almacena la contraseña en una cookie o localStorage
            if (typeof window !== 'undefined') {
              localStorage.setItem('user-spotter-email', JSON.stringify(values.email))
              localStorage.setItem('user-spotter-pass', JSON.stringify(values.pass))
            }
        }
      
     
      setLoading(true)
      const response = await login(values);
      if(response.status === 200){
        Swal.fire({
            icon: "success",
            title: `${response.message}`,
            showConfirmButton: false,
            timer: 1500
        });
        setLoading(false)
        resetForm();
        setUser(response.user);
        console.log(response.user.role_id.name)
        const dashRedirect = response.user.role_id.name;
        setRolUser(dashRedirect)
        setIsAuthClient(true)
        //Aqui va una  validacion de acuerdo al rol del usuario en base a ello redirige a dashboards distintos
        if(dashRedirect === "cliente"){
          //setIsAuthClient(true)
          router.push("/inicio/cliente");
        }
        
        if(dashRedirect === "dueño"){
          router.push("/inicio/duennio");
        }

        if(dashRedirect === "profesor/a"){
          router.push("/inicio/profesor")
        }

        if(dashRedirect === "secretario/a"){
          router.push("/inicio/secretario")
        }
        return;
      }

      if(response.status === 404){
        Swal.fire({
            icon: "error",
            title: `${response.message}`,
            showConfirmButton: false,
            timer: 1500
        });
        setLoading(false)
        resetForm();
        return;
      }
    },
  });


  //esta validación permite determinar sino se ha iniciado sesión antes.
  if(rolUser !== ""){

    if(rolUser === "cliente"){
      router.push("/inicio/cliente");
    }
        
    if(rolUser === "dueño"){
      router.push("/inicio/duennio");
    }

    if(rolUser === "profesor/a"){
      router.push("/inicio/profesor")
    }

    if(rolUser === "secretario/a"){
      router.push("/inicio/secretario")
    }
    
    return;
  }



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
          onSubmit={formik.handleSubmit}
          className='bg-black text-white p-4 sm:p-6 md:p-8 lg:p-10'
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className='flex justify-center mb-40'>
                <Image src={spotterLogo} alt='logo' />
              </div>

            
              <h2 className='mb-6'>Registrar Usuario</h2>
                
                    <div className='relative mt-3'>
                        <input
                            type='text'
                            id='firstName'
                            placeholder='Nombre'
                            className='text-primaryDefault bg-gray-800 mb-4 p-2 border-none rounded-lg w-full pl-10 border border-gray-300'
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                        <div className='my-1 text-primaryDefault'>{String(formik.errors.firstName)}</div>
                        ) : null}

                        <div className='absolute left-2 top-1/3 transform -translate-y-1/2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primaryDefault">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>

                    </div>

                    <div className='relative mt-3'>
                        <input
                            type='text'
                            id='lastName'
                            placeholder='Apellido'
                            className='text-primaryDefault bg-gray-800 mb-4 p-2 border-none rounded-lg w-full pl-10 border border-gray-300'
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                        <div className='my-1 text-primaryDefault'>{String(formik.errors.lastName)}</div>
                        ) : null}
                        <div className='absolute left-2 top-1/3 transform -translate-y-1/2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primaryDefault">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                        </div>
                    </div>
                    <div className='relative mt-3'>
                        <input
                            type='text'
                            id='phone'
                            placeholder='Telefono'
                            className='text-primaryDefault bg-gray-800 mb-4 p-2 border-none rounded-lg w-full pl-10 border border-gray-300'
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                        <div className='my-1 text-primaryDefault'>{String(formik.errors.lastName)}</div>
                        ) : null}
                        <div className='absolute left-2 top-1/3 transform -translate-y-1/2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primaryDefault">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                        </div>
                    </div>
                
                    <div className='relative mt-3'>
                        <input
                            type='email'
                            id='email'
                            placeholder='Correo electronico'
                            className='text-primaryDefault bg-gray-800 mb-4 p-2 border-none rounded-lg w-full pl-10 border border-gray-300'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                        <div className='my-1 text-primaryDefault'>{String(formik.errors.email)}</div>
                        ) : null}
                        <div className='absolute left-2 top-1/3 transform -translate-y-1/2'>
                            <Image src={mailIcon} alt='Imagen' width={20} height={20} />
                        </div>
                    </div>
                

                <div>
                    <label htmlFor='pass' className='mb-2 '>
                        Contraseña
                    </label>
                    <input
                        type='pass'
                        id='pass'
                        className='mb-4 p-2 border-none rounded-lg w-full text-primaryDefault bg-gray-800'
                        onChange={formik.handleChange}
                        value={formik.values.pass}
                        placeholder={'**********'}
                    />
                    {formik.touched.pass && formik.errors.pass ? (
                        <div className='my-1 text-primaryDefault'>{String(formik.errors.pass)}</div>
                    ) : null}
                    
                </div>
             

              

              <button
                type='submit'
                className='p-2 bg-primaryDefault text-white rounded-md w-full '
              >
                Confirmar
              </button>
              <h2 className='text-gray-500 mt-4'>
                Ya tienes cuenta?
               
                <Link href={"/acceso"}><span className='text-primaryLigth '> Inicia Sesión</span></Link>
              </h2>
            </>
          )}
        </form>
      )}
    </div>
  );
}
"use client"
import React from "react";
import Header from "../Components/Header";
import SectionButton from "../Components/SectionButton";
import CardChartUser from "../Components/CardChartUser";
import CardRutinas from "../Components/CardRutinas";
import Navbar from "../Components/Navbar";
import ImagenRutinaSentadilla from "@/public/ImagenRutina1.png";
import ImagenRutinaEspalda from "@/public/ImagenRutina2.png";
import ImagenRutinaCuerdas from "@/public/ImagenRutina3.png";
import ImagenRutinaBiceps from "@/public/ImagenRutinaBiceps.png";
import Calendario from "../Components/Calendario";
import Spotify from "../Components/Spotify";
import GlobalContainer from "../Components/GlobalContainer";

const Entrenamiento = () => {
    return (

        <GlobalContainer>
            <Header />
            <Navbar />
            <div className='mt-9'>
                <SectionButton
                    section='Mi entranamiento'
                    description='Sigue tu entrenamiento'
                    active
                />
            </div>
            <CardChartUser />
            <div className=''>
                <SectionButton
                    section='Tus rutinas para hoy'
                    description='Sigue tu lista de ejercicios personalizada'
                    active
                />
            </div>
            <div className="h-52 overflow-hidden overflow-x-auto">
                <div className='flex gap-2 w-[480px] '>
                    <CardRutinas
                        imagen={ImagenRutinaSentadilla}
                        tiempo={30}
                        calorias={200}
                        active
                        ejercicio="Sentadillas"
                    />
                    <CardRutinas
                        imagen={ImagenRutinaEspalda}
                        tiempo={30}
                        calorias={300}
                        active
                        ejercicio="Espalda"
                    />
                    <CardRutinas
                        imagen={ImagenRutinaCuerdas}
                        tiempo={20}
                        calorias={100}
                        active
                        ejercicio="Cuerda"
                    />
                </div>
            </div>
            <div className='mt-9'>
                <SectionButton
                    section='Rutinas sugeridas para hoy'
                    description='Profesores disponibles en este momento'
                    active={false}
                />
            </div>
            <div className="h-52 overflow-hidden overflow-x-auto">
                <div className='flex gap-2 w-[480px] '>
                    <CardRutinas
                        imagen={ImagenRutinaBiceps}
                        tiempo={30}
                        calorias={200}
                        active={false}
                        ejercicio="Biceps"
                    />
                    <CardRutinas
                        imagen={ImagenRutinaEspalda}
                        tiempo={30}
                        calorias={300}
                        active={false}
                        ejercicio="Espalda"
                    />
                    <CardRutinas
                        imagen={ImagenRutinaCuerdas}
                        tiempo={20}
                        calorias={100}
                        active={false}
                        ejercicio="Cuerdas"
                    />
                </div>
            </div>
            <div className='mt-9'>
                <SectionButton
                    section='Horarios de la sede'
                    description='Ve los días y horarios de tu gimnasio'
                    active={false}
                />
            </div>
            <Calendario />
            <Spotify />
        </GlobalContainer>
    );
};

export default Entrenamiento;

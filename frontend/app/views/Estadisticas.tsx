import React from 'react'
import Header from '../Components/Header';
import SectionButton from '../Components/SectionButton';
import TabChartStatics from '../Components/TabChartStatics';

const Estadisticas = () => {
  return (
    <div className='w-[100%] px-[16px] pt-[32px]'>
      <Header/>
      <SectionButton section='Tu rendimiento' description='Basado en los ejercicios completados esta semana'/>
      <TabChartStatics/>
    </div>
  )
}

export default Estadisticas;
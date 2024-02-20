import React from 'react'
import Header from '../Components/Header';
import SectionButton from '../Components/SectionButton';
import TabChartStatics from '../Components/TabChartStatics';
import ChartsLine from '../Components/ChartsLine';
import GlobalContainer from '../Components/GlobalContainer';

const Estadisticas = () => {
  return (
    <GlobalContainer>
      <Header/>
      <SectionButton active={true} section='Tu rendimiento' description='Basado en los ejercicios completados esta semana'/>
      <TabChartStatics/>
      <ChartsLine/>
    </GlobalContainer>
  )
}

export default Estadisticas;
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LinearScale, PointElement, LineElement } from 'chart.js';

Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);

const data = {
  labels: ['Lun', 'Mar', 'Miér', 'Jue', 'Vie', 'Sáb', 'Dom'],
  datasets: [
    {
      label: 'First dataset',
      data: [0, 25, 50, 75, 100, 75, 100],
      fill: true,
      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Relleno blanco
      borderColor: 'rgba(255, 206, 86, 1)',
      tension: 0.5,
    },
  ],
};

const legend = {
  display: true,
  position: 'bottom',
  labels: {
    fontColor: '#323130',
    fontSize: 14,
  },
};

const options = {
  title: {
    display: true,
    text: 'Chart Title',
  },
  scales: {
    y: {
      ticks: {
        min: 0,
        max: 100,
        stepSize: 25,
      },
    },
  },
};

export default function App() {
  return (
    <div className='w-full h-full p-10 rounded-xl shadow-md'>
      <Line data={data} legend={legend} options={options} />
    </div>
  );
}

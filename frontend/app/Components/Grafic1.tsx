import { Line } from 'react-chartjs-2';
import {
  Chart,
  ChartConfiguration,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from 'chart.js';

// Registra los elementos necesarios
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

import 'tailwindcss/tailwind.css';

const data = {
  labels: [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ],
  datasets: [
    {
      label: 'Valores',
      data: [0, 25, 50, 75, 100, 75, 50],
      fill: true,
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      tension: 0.5, // Líneas suaves
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 25,
        maxTicksLimit: 5,
      },
    },
  },
};

export default function Grafic1() {
  return (
    <div className='w-full h-full  p-10 bg-white dark:bg-gray-800 rounded-xl shadow-md'>
      <Line data={data} options={options} />
    </div>
  );
}

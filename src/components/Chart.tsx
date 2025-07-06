import React from 'react';
import { Bar } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

// register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  data: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}


const Chart: React.FC<ChartProps> = ({ data, options }) => {
  // always have faster animation speeds
  const defaultOptions: ChartOptions<'bar'> = {
    animation: {
      duration: 200, // in milliseconds
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    ...options,
  };

  return <Bar data={data} options={defaultOptions} />;
};

export default Chart;

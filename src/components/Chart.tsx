import React from 'react';
import { Bar } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import '../styles/Chart.scss';

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
      duration: 0, // in milliseconds
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    ...options,
  };

  return <div id="chart">This should be a chart.</div>;
  // return <Bar id="chart" data={data} options={defaultOptions} />;
};

export default Chart;

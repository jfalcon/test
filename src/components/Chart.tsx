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
    animation: false,
    maintainAspectRatio: true,
    resizeDelay: 0,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    ...options,
  };

  // this needs a container to resize properly
  return (
    <section id="chart" data-testid="chart">
      <div>
        <Bar data={data} options={defaultOptions} />
      </div>
    </section>
  );
};

export default Chart;

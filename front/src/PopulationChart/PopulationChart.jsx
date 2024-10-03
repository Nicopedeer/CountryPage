import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const PopulationChart = ({ populationData }) => {
    const data = {
      labels: populationData.map((entry) => entry.year),
      datasets: [
        {
          label: 'Population',
          data: populationData.map((entry) => entry.value),
          borderColor: 'rgb(43, 90, 234)',
          background: 'rgb(43, 90, 234)',
          fill: true,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Population Over Time',
        },
      },
    };
  
    return (
      <div style={{ width: '60%', height: '500px', marginLeft:'25%' }}>
        <Line data={data} options={options} />
      </div>
    );
  };
  
  export default PopulationChart;
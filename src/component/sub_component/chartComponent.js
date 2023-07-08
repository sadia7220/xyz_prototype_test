import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { useLocation } from 'react-router-dom';

const ChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const location = useLocation();
  const { xValues, yValues } = location.state;

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: xValues,
        datasets: [
          {
            label: 'X',
            data: yValues,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'KP'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'X'
            }
          }
        },
      },
    });
  }, [xValues, yValues]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;

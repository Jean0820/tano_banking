"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    labels: ["Bank of America", "Chase", "Iş Bankasi"],
    datasets: [
      {
        data: [300, 150, 100],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
        hoverBackgroundColor: ["#ff4f72", "#2a92d6", "#e6b800"],
      },
    ],
  };

  const options = {
    cutout: '60%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "bottom" as const,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;

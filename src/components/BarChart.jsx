import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const BarChart = () => {
  const data = {
    labels: ["20", "25", "30", "35", "40", "45", "50", "55", "60", "65"],
    datasets: [
      {
        label: "Bar Chart",
        data: [75, 100, 110, 200, 250, 275, 300, 320, 350, 375],
        backgroundColor: "#2563eb",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-80 md:w-80 lg:w-96 xl:w-full h-72 ">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

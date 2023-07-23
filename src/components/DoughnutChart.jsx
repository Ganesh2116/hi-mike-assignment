import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Average 78%"],
    datasets: [
      {
        data: [78, 22],
        backgroundColor: ["#84CC16", " #cbd5e1"],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    cutout: "70%",
  };
  const data1 = {
    labels: ["Top 95%"],
    datasets: [
      {
        data: [95, 5],
        backgroundColor: ["#84CC16", " #cbd5e1"],
      },
    ],
  };
  const options1 = {
    maintainAspectRatio: false,
    cutout: "70%",
  };
  const data2 = {
    labels: ["Me 59%"],
    datasets: [
      {
        data: [59, 39],
        backgroundColor: ["#84CC16", " #cbd5e1"],
      },
    ],
  };
  const options2 = {
    maintainAspectRatio: false,
    cutout: "70%",
  };

  return (
    <>
      <div className="w-28 h-28 ">
        <Doughnut data={data} options={options} />
      </div>
      <div className="w-28 h-28 ">
        <Doughnut data={data1} options={options1} />
      </div>
      <div className="w-28 h-28 ">
        <Doughnut data={data2} options={options2} />
      </div>
    </>
  );
};
export default DoughnutChart;

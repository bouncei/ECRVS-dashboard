import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  indexAxis: "x",
  maintainAspectRatio: false,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "",
    },
  },
};

const labels = ["Male", "Female"];

export const data = {
  labels,
  datasets: [
    {
      label: "Sex",
      data: [1000000, 900000],
      backgroundColor: ["#0d5cab", "#fea93b"],
      borderRadius: 100,
      // borderSkipped: "left",
      barPercentage: 0.34,
    },
  ],
};

function ChildChart() {
  return <Bar width={100} height={250} options={options} data={data} />;
}

export default ChildChart;

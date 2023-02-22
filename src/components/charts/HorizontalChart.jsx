import React, { useState, useEffect } from "react";
import axios from "../../axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  // Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { LoadingIcon } from "./LoadingIcon";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title
  // Tooltip,
);

function HorizontalChart() {
  const [chartData, setChartData] = useState(null);
  const options = {
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
    indexAxis: "y",
    maintainAspectRatio: false,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "",
      },
    },
  };
  useEffect(() => {
    (async () => {
      try {
        let labels = [];
        let count = [];
        const res = await axios.get(
          "birth-registration/stats/statistics-by-age"
        );
        // console.log("Statistics by age", res.data);
        for (const obj of res.data) {
          labels.push(obj.name);
          count.push(obj.uv);
        }
        setChartData({
          labels,
          datasets: [
            {
              label: "Age",
              data: count,
              backgroundColor: ["#2d96fb", "#FEA93B", "#0d5cab", "#0d5cab"],
              borderRadius: 100,
              borderSkipped: "left",
              barPercentage: 0.58,
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log("Final data on statistics by age", chartData);

  const data = {
    labels: ["0-1 years", "1-5 years", "5-10 years", "10-17 years"],
    datasets: [
      {
        label: "",
        data: [20, 40, 60, 77],
        backgroundColor: ["#2d96fb", "#FEA93B", "#0d5cab", "#0d5cab"],
        borderRadius: 100,
        borderSkipped: "left",
        barPercentage: 0.58,
      },
    ],
  };
  return chartData ? (
    <Bar width={100} height={350} options={options} data={chartData} />
  ) : (
    <LoadingIcon />
  );
}

export default HorizontalChart;

import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { LoadingIcon } from "./LoadingIcon";
import axios from "../../axios";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
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

function ChildChart() {
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        let labels = [];
        let count = [];
        const res = await axios.get(
          "birth-registration/stats/under-5-aged-birthreg"
        );
        // console.log("Statistics by age", res.data);
        for (const obj of res.data) {
          labels.push(obj.State_Name);
          count.push(obj.Count);
        }
        setChartData({
          labels,
          datasets: [
            {
              label: "States",
              data: count,
              backgroundColor: ["#26F683"],
              borderRadius: 100,
              barPercentage: 0.47,
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return chartData ? (
    <Bar width={100} height={350} options={options} data={chartData} />
  ) : (
    <LoadingIcon />
  );
}

export default ChildChart;

// import React from "react";
// import { PieChart } from "react-minimal-pie-chart";

// const DonutChart = () => {
//   const defaultLabelStyle = {
//     fontSize: "8px",
//     fontFamily: "Poppins",
//   };
//   return (
//     <PieChart
//       center={[50, 50]}
//       lengthAngle={360}
//       lineWidth={40}
//       paddingAngle={0}
//       radius={50}
//       data={[
//         { title: "Birth", value: 75, color: "#2F95FB" },
//         { title: "Death", value: 25, color: "#FEA93B" },
//       ]}
//       label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
//       labelStyle={defaultLabelStyle}
//       labelPosition={80}
//     />
//   );
// };

// export default DonutChart;

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import { DonutChart } from ".";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Literate", "Illiteracy"],
  datasets: [
    {
      label: "",
      data: [16, 4],
      backgroundColor: ["#0d5cab", "#fea93b"],
      borderColor: ["#FFFFFF", "#FFFFFF"],
      borderWidth: 3,
    },
  ],
};

function DonutChart() {
  return <Doughnut data={data} />;
}

export default DonutChart;

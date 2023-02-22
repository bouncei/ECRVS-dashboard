import React from "react";
import {
  ResponsiveContainer,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Maternity",
    pv: 0,
  },
  {
    name: "Hospital",
    pv: 1398,
  },
  {
    name: "At Home",
    pv: 9800,
  },
  {
    name: "Tradintional Doctor's Place",
    pv: 3908,
  },
  {
    name: "Car/Taxi",
    pv: 4800,
  },
  {
    name: "Bus",
    pv: 3800,
  },
  {
    name: "Train",
    pv: 4300,
  },
  {
    name: "Roadside",
    pv: 3403,
  },
  {
    name: "Aeroplane",
    pv: 4938,
  },
];
const LineGraph = () => {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;

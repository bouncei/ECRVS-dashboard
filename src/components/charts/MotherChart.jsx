import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const data = [
  {
    name: "9 - 17",
    "Age Groups": 4000,
  },
  {
    name: "18 - 26",
    "Age Groups": 3000,
  },
  {
    name: "27 - 35",
    "Age Groups": 2000,
  },
  {
    name: "36 - 44",
    "Age Groups": 2780,
  },
  {
    name: "45 - 54",
    "Age Groups": 1890,
  },
  {
    name: "54 - Over",
    "Age Groups": 2390,
  },
];

export default function MotherChart() {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarChart
        width={"100%"}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" padding={{ left: 3, right: 5 }} />
        <YAxis />
        <Tooltip />

        <defs>
          <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
            <stop offset="30%" stopColor="#0C522C" />
            <stop offset="95%" stopColor="#57E622" />
          </linearGradient>
        </defs>
        <Bar
          dataKey="Age Groups"
          fill="url(#colorUv)"
          radius={[60, 60, 0, 0]}
          barSize={30}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

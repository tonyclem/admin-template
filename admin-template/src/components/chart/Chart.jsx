import React from "react";
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// data
const data = [
  {
    name: "January",
    total: 3200,
  },
  {
    name: "February",
    Total: 2100,
  },
  {
    name: "March",
    Total: 2000,
  },
  {
    name: "April",
    Total: 2780,
  },
  {
    name: "May",
    Total: 1890,
  },
  {
    name: "June",
    Total: 3000,
  },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />

          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="Total"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

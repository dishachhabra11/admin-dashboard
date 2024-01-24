import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const DonutChart = () => {
  // Sample data
  const data = [
    { name: "paid", students: 30 },
    { name: "unpaid", students: 70 }
  ];

  const COLORS = ["#793FDF", "#14C38E"]; // Define your custom colors

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto 10%",
      }}
    >
      <h1 style={{ color: "green" }}>GeeksforGeeks</h1>
      <h3>React JS example for donut chart using Recharts</h3>
      <PieChart width={700} height={700}>
        <Tooltip />
        <Pie
          data={data}
          dataKey="students"
          outerRadius={200}
          innerRadius={150}
          label={({ name, students }) => `${name}: ${students}`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default DonutChart;
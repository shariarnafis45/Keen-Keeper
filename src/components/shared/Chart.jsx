"use client";
import { FriendContext } from "@/context/FriendContext";
import React, { useContext } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const Chart = () => {
  const { timeline } = useContext(FriendContext);
  let call = 0;
  let text = 0;
  let video = 0;
  timeline.forEach((data) => {
    if (data.actionType === "text") {
      text += 1;
    } else if (data.actionType === "call") {
      call += 1;
    } else if (data.actionType === "video") {
      video += 1;
    }
  });
  const chartData = [
    { name: "call", value: call },
    { name: "text", value: text },
    { name: "video", value: video },
  ];
  
  const colors = ["#1F4D3A", "#7C3AED", "#2F9E66"];
  return (
    <div className="max-w-md h-96">
      
        <PieChart
          width={300}
          height={300}
        >
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={90}
            outerRadius={120}
            cornerRadius={10}
            paddingAngle={5}
            stroke="none"
            strokeWidth={0}
            isAnimationActive={true}
          >
            {chartData.map((data, i) => (
              <Cell key={i} fill={colors[i]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
     
    </div>
  );
};

export default Chart;

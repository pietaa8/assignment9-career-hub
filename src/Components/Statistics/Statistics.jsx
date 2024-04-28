import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const assignmentMarks = [
    { assignment: "Assignment 1", marks: 48 },
    { assignment: "Assignment 2", marks: 47 },
    { assignment: "Assignment 3", marks: 45 },
    { assignment: "Assignment 4", marks: 60 },
    { assignment: "Assignment 5", marks: 43 },
    { assignment: "Assignment 6", marks: 41 },
    { assignment: "Assignment 7", marks: 30 },
  ];

  return (
    <div className=" mt-10 p-28 ml-11">
      <h2 className="text-lg text-center font-semibold mb-5">
        My Assignment Marks
      </h2>
      <AreaChart
        width={500}
        height={400}
        data={assignmentMarks}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="assignment" />
        <YAxis dataKey="marks" />
        <Tooltip />
        <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Statistics;

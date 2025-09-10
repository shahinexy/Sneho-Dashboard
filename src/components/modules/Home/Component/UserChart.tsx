"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
 
const data = [
  { name: "Jan", users: 30 },
  { name: "Feb", users: 45 },
  { name: "Mar", users: 60 },
  { name: "Apr", users: 75 },
  { name: "May", users: 75 },
  { name: "Jun", users: 75 },
];

const UserChart = () => {
  return (
      <div className="w-full md:h-96 h-64 md:p-4 p-2 bg-white rounded-2xl">
        {data?.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#FD10B6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
  );
};

export default UserChart;

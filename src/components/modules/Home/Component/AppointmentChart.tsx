"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", users: 30 },
  { month: "Feb", users: 45 },
  { month: "Mar", users: 60 },
  { month: "Apr", users: 30 },
  { month: "May", users: 90 },
  { month: "Jun", users: 120 },
];

const AppointmentChart = () => {
  return (
    <div className="w-full md:h-96 h-64 md:p-4 p-2 bg-white rounded-2xl">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#81E1E8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#81E1E800" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#81E1E8"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorUsers)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppointmentChart;

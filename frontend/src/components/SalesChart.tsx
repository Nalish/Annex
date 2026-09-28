"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", sales: 4500 },
  { day: "Tue", sales: 6200 },
  { day: "Wed", sales: 3800 },
  { day: "Thu", sales: 7500 },
  { day: "Fri", sales: 8200 },
  { day: "Sat", sales: 6800 },
  { day: "Sun", sales: 5200 },
];

export default function SalesChart() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">
        Sales Overview
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Sales for the last 7 days
      </p>

      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#000000"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
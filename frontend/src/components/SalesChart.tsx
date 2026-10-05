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
    <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">

      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-carbon-slate">
          Sales Overview
        </h2>

        <p className="mt-1 text-sm text-muted">
          Sales for the last 7 days
        </p>
      </div>

      {/* Chart */}
      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="day"
              tick={{ fill: "#64748b", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#64748b", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `KES ${value / 1000}k`}
            />

            <Tooltip
              formatter={(value) => [`KES ${value}`, "Sales"]}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              }}
            />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
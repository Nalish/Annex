"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { category: "Phones", stock: 120 },
  { category: "Chargers", stock: 80 },
  { category: "Earphones", stock: 65 },
  { category: "Cables", stock: 150 },
  { category: "Cases", stock: 95 },
];

export default function StockChart() {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">

      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-carbon-slate">
          Stock by Category
        </h2>

        <p className="mt-1 text-sm text-muted">
          Current stock levels
        </p>
      </div>

      {/* Chart */}
      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
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
              stroke="var(--border)"
            />

            <XAxis
              dataKey="category"
              tick={{
                fill: "var(--muted)",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "var(--muted)",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              formatter={(value) => [value, "Stock"]}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid var(--border)",
                backgroundColor: "var(--surface)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              }}
            />
            <Bar
              dataKey="stock"
              fill="var(--slate-teal)"
              radius={[6, 6, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
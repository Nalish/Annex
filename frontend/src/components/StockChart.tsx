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
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">
        Stock by Category
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Current stock levels
      </p>

      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="category" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="stock"
              fill="#000000"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
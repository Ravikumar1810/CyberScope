import React from "react";
import {
  PieChart as RePie,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const COLORS = {
  High: "#F87171",
  Medium: "#FBBF24",
  Low: "#34D399",
};

export default function PieChart({ data, onSliceClick }) {
  return (
    <motion.div
      className="bg-cardDark rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-center text-primary-dark font-semibold mb-4">
        Breach Exposure Distribution
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <RePie>
          <Pie
            data={data}
            dataKey="count"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
            onClick={(e) => onSliceClick?.(e.name)}
          >
            {data.map((item, i) => (
              <Cell key={i} fill={COLORS[item.risk]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "#1E293B", borderRadius: 8 }}
            itemStyle={{ color: "#ffffff" }}
          />
          <Legend
            wrapperStyle={{ color: "#9CA3AF" }}
            verticalAlign="bottom"
            height={24}
          />
        </RePie>
      </ResponsiveContainer>
    </motion.div>
  );
}

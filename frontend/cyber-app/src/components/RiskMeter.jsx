import React from "react";
import { motion } from "framer-motion";

export default function RiskMeter({ riskScore }) {
  const riskStyles = {
    High: { color: "#f87171", border: "border-red-500" },
    Medium: { color: "#facc15", border: "border-yellow-400" },
    Low: { color: "#34d399", border: "border-emerald-400" },
    Unknown: { color: "#cbd5e1", border: "border-gray-500" },
  };

  const risk = riskStyles[riskScore] || riskStyles.Unknown;

  return (
    <motion.div
      className={`flex flex-col items-center justify-center p-8 rounded-xl bg-[#1f2937] shadow-2xl border-4 ${risk.border}`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
    >
      <motion.p
        className="text-sm text-gray-400 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Overall Risk Level
      </motion.p>

      <motion.div
        className="w-40 h-40 rounded-full border-8 flex items-center justify-center font-extrabold text-3xl"
        style={{ color: risk.color, borderColor: risk.color }}
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        {riskScore || "Unknown"}
      </motion.div>
    </motion.div>
  );
}

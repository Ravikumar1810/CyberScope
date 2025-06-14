import React from "react";
import { motion } from "framer-motion";
import { Mail, ShieldAlert, PieChart } from "lucide-react";

const links = [
  { id: "email-scan", label: "Scan Email", icon: Mail },
  { id: "risk-meter", label: "Risk Meter", icon: ShieldAlert },
  { id: "breach-chart", label: "Breach Chart", icon: PieChart },
];

export default function Sidebar() {
  const handleClick = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <motion.aside
      className="w-60 min-h-screen bg-[#111827] p-6 shadow-xl flex flex-col"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <motion.h2
        className="text-2xl font-bold text-orange-400 tracking-wide mb-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        CyberScope
      </motion.h2>

      <nav className="flex flex-col gap-6">
        {links.map(({ id, label, icon: Icon }) => (
          <motion.button
            key={id}
            onClick={() => handleClick(id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-4 py-2 rounded-lg transition bg-[#1F2937] hover:bg-orange-500 text-white hover:text-black font-semibold"
          >
            <Icon size={18} />
            <span>{label}</span>
          </motion.button>
        ))}
      </nav>

      <div className="mt-auto text-xs text-gray-500 pt-8">© 2025 CyberScope</div>
    </motion.aside>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function BreachDetails({ breaches }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {breaches.map((b, idx) => (
        <motion.div
          key={b.site}
          className="bg-[#111827] rounded-xl p-6 shadow-lg space-y-3 hover:shadow-orange-500/30 transition-all duration-300"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="flex items-center gap-3">
            {b.logoUrl && (
              <img
                src={b.logoUrl}
                alt={`${b.site} logo`}
                className="h-10 w-10 object-contain"
              />
            )}
            <h3 className="text-lg font-bold text-orange-400">{b.site}</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Breached on <strong>{b.breachDate}</strong> (
            <span
              className={
                b.risk > 70
                  ? "text-red-400"
                  : b.risk > 40
                  ? "text-yellow-400"
                  : "text-emerald-400"
              }
            >
              {b.risk}%
            </span>
            )
          </p>
          <p className="text-sm text-gray-500">{b.description}</p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            className="mt-4 w-full bg-orange-500 text-black rounded-md font-semibold py-2 hover:bg-orange-600 transition"
          >
            Secure Account
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  );
}

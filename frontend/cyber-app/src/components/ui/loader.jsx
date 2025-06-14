// src/components/ui/loader.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex justify-center">
      <motion.div
        className="w-12 h-12 rounded-full bg-orange-500"
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      />
    </div>
  );
}

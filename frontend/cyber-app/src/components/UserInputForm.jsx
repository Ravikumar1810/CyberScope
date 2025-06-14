// src/components/UserInputForm.jsx
import React, { useState } from "react";
import Input from "./ui/input";
import Button from "./ui/button";
import { toast } from "./ui/sonner";
import { motion } from "framer-motion";

export default function UserInputForm({ onSubmit, isLoading }) {
  const [email, setEmail] = useState("");
  const bannerWords = ["Secure.", "Scan.", "Protect."];
  const [wordIndex, setWordIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex(i => (i + 1) % bannerWords.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const submit = e => {
    e.preventDefault();
    if (!email.includes("@")) return toast.error("Please enter a valid email!");
    onSubmit(email);
  };

  return (
    <motion.form
      onSubmit={submit}
      className="border-animated-glow bg-[#1f2937] rounded-2xl shadow-2xl p-8 max-w-lg mx-auto flex flex-col space-y-4"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h3
        className="text-2xl font-bold text-center text-orange-400"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >
        {bannerWords[wordIndex]}
      </motion.h3>

      <motion.p
        className="text-gray-300 text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Enter your email and we’ll dig deep into your digital footprint.
      </motion.p>

      <Input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full bg-[#111827] text-white px-4 py-3 rounded-md focus:ring-2 focus:ring-orange-400 transition"
      />

      <div className="flex justify-center">
        <Button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 rounded-lg border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black font-semibold transition"
        >
          {isLoading ? "Scanning…" : "Start Scan"}
        </Button>
      </div>
    </motion.form>
  );
}

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import UserInputForm from "../components/UserInputForm";
import RiskMeter from "../components/RiskMeter";
import PieChart from "../components/PieChart";
import BreachDetails from "../components/BreachDetails";
import Loader from "../components/ui/loader";
import { Toaster } from "../components/ui/sonner";
import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";

export default function Dashbord() {
  const [loading, setLoading] = useState(false);
  const [riskScore, setRiskScore] = useState(null);
  const [breachData, setBreachData] = useState([]);

  const handleSubmit = async (email) => {
    setLoading(true);
    setRiskScore(null);
    setBreachData([]);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setRiskScore(data.riskScore);
      setBreachData(data.breaches);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-animated text-white font-sans overflow-hidden">
      {/* <Navbar /> */}
      <Toaster />
      <Sidebar />

      <main className="flex-1 p-6 space-y-16 overflow-y-auto scroll-smooth">
        <motion.div
          className="text-center space-y-2 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-5xl font-extrabold text-orange-400">
            Is Your Digital Identity Safe?
          </h1>
          <motion.p
            className="text-lg text-gray-300"
            animate={{
              x: ["-10%", "10%", "-10%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Uncover breaches. Secure your email. Stay ahead of cyber threats.
          </motion.p>
        </motion.div>

        <section id="email-scan" className="space-y-8">
          <UserInputForm onSubmit={handleSubmit} isLoading={loading} />
          {loading && (
            <div className="flex justify-center">
              <Loader />
            </div>
          )}
        </section>

        {riskScore && (
          <section id="risk-meter" className="space-y-8">
            <motion.h2
              className="text-3xl font-bold text-center"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Scan. Secure. <span className="text-primary">Stay ahead</span>.
            </motion.h2>
            <div className="flex justify-center mt-4">
              <RiskMeter riskScore={riskScore} />
            </div>
          </section>
        )}

        {breachData.length > 0 && (
          <>
            <section id="breach-chart" className="space-y-8">
              <motion.h2
                className="text-3xl font-bold text-center"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Platform <span className="text-primary">Compromise</span>{" "}
                Overview
              </motion.h2>
              <div className="max-w-3xl mx-auto mt-4">
                <PieChart data={breachData} />
              </div>
            </section>

            <section id="breach-details" className="space-y-8 mt-10">
              <motion.h2
                className="text-3xl font-bold text-center text-orange-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Detailed Breach Insights
              </motion.h2>
              <BreachDetails breaches={breachData} />
            </section>
          </>
        )}
      </main>
    </div>
  );
}

// import React, { useState } from "react";
// import { Input } from "../components/ui/input";
// import { Button } from "../components/ui/button";
// import { toast } from "../lib/use-toast";
// import { motion } from "framer-motion";

// export function InputForm({ onSubmit, isLoading }) {
//   const [email, setEmail] = useState("");

//   const handle = e => {
//     e.preventDefault();
//     if (!email.includes("@")) {
//       toast.error("Please enter a valid email");
//       return;
//     }
//     onSubmit(email);
//   };

//   return (
//     <motion.form
//       onSubmit={handle}
//       className="max-w-lg mx-auto bg-primary rounded-xl shadow-xl p-8"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <label htmlFor="email" className="block text-highlight font-medium mb-2">
//         Email Address
//       </label>
//       <Input id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
//       <Button type="submit" disabled={isLoading} className="mt-6">
//         {isLoading ? "Analyzing..." : "Analyze"}
//       </Button>
//     </motion.form>
//   );
// }

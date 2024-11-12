"use client";

import { motion } from "framer-motion";
import React from "react";
import { Cover } from "../components/ui/Cover";
import { AuroraBackground } from "../components/ui/aurora-background";
import { useNavigate } from 'react-router-dom';
export function Dashboard() {
  const Navigate = useNavigate();
  const handleButtonClick = () => {
    Navigate("/login");
    console.log("Button clicked");
  };
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-3xl font-bold dark:text-white text-center">
        Real-time Insights, Optimized Performance <br></br><Cover>Your APIs Unleashed</Cover> 
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Welcome to ZenAPI
        </div>
        <button onClick={handleButtonClick} 
        className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Get Started
        </button>
      </motion.div>
    </AuroraBackground>
  );
}


export default Dashboard;
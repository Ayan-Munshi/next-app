"use client";

import { motion } from "framer-motion";
import React from "react";
import  AuroraBackground  from "./ui/aurora-background";

export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 5, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Welcome to my profile!
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-400 py-4">
          And this, is Ayan Munshi.
        </div>
        <button className="bg-black dark:bg-gray-600 rounded-full w-fit text-white dark:text-gray-400 px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}

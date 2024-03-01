"use client";
import React from "react";
import { motion } from "framer-motion";
const MotionWrapper = ({ children }: any) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {children}
    </motion.div>
  );
};

export default MotionWrapper;

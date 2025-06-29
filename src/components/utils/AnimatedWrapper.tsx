"use client"

import React from "react"
import { motion } from "framer-motion"

interface AnimatedWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const AnimatedWrapper = ({ children, className, delay = 0 }: AnimatedWrapperProps) => {

  return (
    <motion.div 
      initial={{ opacity: 10, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      }}
      className={className ? className : ""}
    >
      {children}
    </motion.div>
  )
}


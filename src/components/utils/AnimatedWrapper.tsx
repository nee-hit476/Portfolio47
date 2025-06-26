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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: delay,
        ease: "easeOut",
      }}
      className={className ? className : ""}
    >
      {children}
    </motion.div>
  )
}


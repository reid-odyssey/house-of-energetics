"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Logo({ className = "", variant = "default" }: { className?: string, variant?: "default" | "white" | "dark" }) {
  return (
    <motion.div 
      className={`flex items-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-16"
      >
        <Image
          src="/images/house-of-energetics-logo-black (1).png"
          alt="House of Energetics"
          width={390}
          height={62}
          className="h-16 w-auto dark:hidden"
          priority
        />
        <Image
          src="/images/house-of-energetics-logo-white.png"
          alt="House of Energetics"
          width={390}
          height={62}
          className="h-16 w-auto hidden dark:block"
          priority
        />
      </motion.div>
    </motion.div>
  )
}

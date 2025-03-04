"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-background" />

      {/* Purple blob */}
      <motion.div
        className="absolute top-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-purple opacity-30 gradient-blob"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "easeInOut",
        }}
      />

      {/* Pink blob */}
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-brand-pink opacity-30 gradient-blob"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 15,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Blue blob */}
      <motion.div
        className="absolute top-[30%] left-[20%] w-[25vw] h-[25vw] rounded-full bg-brand-blue opacity-20 gradient-blob"
        animate={{
          x: [0, 40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 18,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}


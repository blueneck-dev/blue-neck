"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              At Blue Neck Solutions, we strive to empower businesses with cutting-edge digital marketing strategies.
              Our goal is to elevate your brand's online presence and drive meaningful engagement with your target
              audience.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <motion.li variants={itemVariants} className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Tailored strategies for each client</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Expert team with years of experience</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Comprehensive digital marketing solutions</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Data-driven approach for measurable results</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


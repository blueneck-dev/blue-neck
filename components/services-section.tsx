"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap } from "lucide-react"

const services = [
  {
    title: "Social Media Management",
    description: "Strategic management of your social media presence to increase engagement and brand awareness.",
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
  {
    title: "Content Creation",
    description: "Compelling content that resonates with your audience and drives conversions.",
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
  {
    title: "Digital Marketing Strategy",
    description: "Comprehensive strategies tailored to your business goals and target audience.",
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
  {
    title: "Brand Development",
    description: "Building and refining your brand identity to stand out in a competitive market.",
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
  {
    title: "Website Design and Management",
    description: "Creating and maintaining websites that convert visitors into customers.",
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
  {
    title: "Video Production",
    description: "High-quality video content that tells your brand story and engages your audience.",
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
]

export function ServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="services" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card rounded-xl p-6 h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


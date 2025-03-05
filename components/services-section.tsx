"use client"

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { motion, useInView } from "framer-motion"
import { Zap } from "lucide-react"
import { useRef } from "react"

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
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CardContainer className="inter-var" containerClassName="py-0">
                <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[280px] rounded-xl p-6 border">
                  <CardItem translateZ="50" className="mb-4">
                    {service.icon}
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-semibold mb-2">
                    {service.title}
                  </CardItem>
                  <CardItem translateZ="80" className="text-muted-foreground text-sm">
                    {service.description}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    as="button"
                    className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold mt-6"
                  >
                    Learn More
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

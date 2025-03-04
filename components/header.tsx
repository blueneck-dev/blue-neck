"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-6 px-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Blue Neck Solutions
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="#about" className="text-sm hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

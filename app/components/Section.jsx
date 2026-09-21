import React from 'react'
import { motion } from "motion/react"

const BASE_CLASSES = 'w-full px-[12%] py-20 scroll-mt-20'

// Shared wrapper for every page section: consistent padding, anchor offset, and a fade-in on scroll.
// `scroll-mt-20` keeps the section heading clear of the fixed navbar when jumped to via a nav link.
const Section = ({ id, className, children }) => (
  <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id={id}
    className={[BASE_CLASSES, className].filter(Boolean).join(' ')}>
    {children}
  </motion.div>
)

export default Section

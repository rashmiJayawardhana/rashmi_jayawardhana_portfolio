import React from 'react'
import { motion } from "motion/react"

// Eyebrow label, title, and optional intro line used at the top of each section.
// The staggered delays (0.3s, 0.5s, 0.7s) make the three lines animate in one after another.
// `descriptionSpacing` exists because each section needs a different gap before its content.
const SectionHeading = ({ eyebrow, title, description, descriptionSpacing = 'mt-5 mb-12' }) => (
  <>
    <motion.h4
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo text-accent dark:text-accentSoft'>
      {eyebrow}
    </motion.h4>
    <motion.h2
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-4xl sm:text-5xl font-Ovo'>
      {title}
    </motion.h2>
    {description && (
      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}
        className={`text-center max-w-2xl mx-auto ${descriptionSpacing} font-Ovo text-gray-600 dark:text-white/80`}>
        {description}
      </motion.p>
    )}
  </>
)

export default SectionHeading

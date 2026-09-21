import React from 'react'
import { motion } from "motion/react"

// Row of pill buttons that selects which project category is shown. Stateless: the parent owns the selection.
const CategoryFilter = ({ categories, active, onChange }) => (
  <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{delay: 0.4, duration: 0.5}}
    className='flex flex-wrap justify-center gap-2 mb-10'>
    {categories.map((category)=>(
      <button
        key={category}
        onClick={()=> onChange(category)}
        className={`text-sm rounded-full px-4 py-1.5 border-[0.5px] duration-300 ${
          active === category
            ? 'bg-accent border-accent text-white'
            : 'border-gray-300 text-gray-600 hover:border-accent hover:text-accent dark:hover:text-accentSoft dark:border-white/20 dark:text-white/70'
        }`}>
        {category}
      </button>
    ))}
  </motion.div>
)

export default CategoryFilter

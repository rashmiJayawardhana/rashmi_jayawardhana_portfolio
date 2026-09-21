import { workData, GITHUB_PROFILE } from '@/assets/assets'
import React, { useState } from 'react'
import { motion } from "motion/react"

const categories = ['All', ...Array.from(new Set(workData.map(p => p.category)))]

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const projects = activeCategory === 'All'
    ? workData
    : workData.filter(p => p.category === activeCategory)

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='work' className='w-full px-[12%] py-20 scroll-mt-20'>
      <motion.h4
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo text-accent dark:text-accentSoft'>
        My portfolio
      </motion.h4>
        <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-4xl sm:text-5xl font-Ovo'>
          My latest work
        </motion.h2>
        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}
        className='text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo text-gray-600 dark:text-white/80'>
          A selection of projects spanning web, mobile, cloud, and machine learning, built solo and with teams.
        </motion.p>

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.4, duration: 0.5}}
      className='flex flex-wrap justify-center gap-2 mb-10'>
        {categories.map((category)=>(
          <button
            key={category}
            onClick={()=> setActiveCategory(category)}
            className={`text-sm rounded-full px-4 py-1.5 border-[0.5px] duration-300 ${
              activeCategory === category
                ? 'bg-accent border-accent text-white'
                : 'border-gray-300 text-gray-600 hover:border-accent hover:text-accent dark:hover:text-accentSoft dark:border-white/20 dark:text-white/70'
            }`}>
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div
      layout
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6'>
        {projects.map((project)=>(
            <motion.div
            key={project.title}
            layout
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.3}}
            whileHover={{y: -6}}
            className='flex flex-col h-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-accent hover:shadow-md duration-500 dark:bg-darkHover/40 dark:border-white/5 dark:shadow-none dark:hover:border-accentSoft/40'>
                <div className='flex items-start justify-between gap-3 mb-3'>
                    <span className='text-xs font-medium bg-accent/10 rounded-full px-3 py-1 text-accent dark:bg-accentSoft/10 dark:text-accentSoft'>{project.category}</span>
                    <span className='text-xs text-gray-400 whitespace-nowrap dark:text-white/40'>{project.type} · {project.year}</span>
                </div>
                <h3 className='font-semibold text-gray-800 dark:text-darkText'>{project.title}</h3>
                {project.org && <p className='text-xs text-gray-400 mt-0.5 dark:text-white/40'>{project.org}</p>}
                <p className='text-sm text-gray-600 leading-relaxed mt-3 mb-5 dark:text-white/65'>{project.description}</p>
                <div className='flex flex-wrap gap-1.5 mb-5'>
                    {project.tech.map((tech, i)=>(
                        <span key={i} className='text-xs bg-gray-100 rounded px-2 py-0.5 text-gray-600 dark:bg-white/5 dark:text-white/55'>{tech}</span>
                    ))}
                </div>
                <div className='mt-auto flex items-center justify-between gap-3'>
                    {project.link && (
                        <a href={project.link} target='_blank' rel='noopener noreferrer'
                           className='group flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-accent dark:hover:text-accentSoft duration-300 dark:text-darkText'>
                            {project.linkLabel}
                            <svg viewBox='0 0 24 24' className='w-4 group-hover:translate-x-1 duration-300' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                              <path d='M5 12h14M13 6l6 6-6 6' />
                            </svg>
                        </a>
                    )}
                    {project.status && (
                        <span className='text-xs text-gray-400 dark:text-white/40'>{project.status}</span>
                    )}
                </div>
            </motion.div>
        ))}
      </motion.div>

      <motion.a
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
      href={GITHUB_PROFILE}
      target='_blank'
      rel='noopener noreferrer'
      className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-500 rounded-full py-3 px-10 mx-auto mt-14 hover:bg-accent hover:border-accent hover:text-white duration-500 dark:text-darkText dark:border-white/50'>
        See more on GitHub
        <svg viewBox='0 0 24 24' className='w-4' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M5 12h14M13 6l6 6-6 6' />
        </svg>
      </motion.a>
    </motion.div>
  )
}

export default Work

import { workData } from '@/data/content'
import { GITHUB_PROFILE } from '@/data/profile'
import React, { useState } from 'react'
import { motion } from "motion/react"
import Section from './Section'
import SectionHeading from './SectionHeading'
import CategoryFilter from './CategoryFilter'
import ProjectCard from './ProjectCard'

const ALL = 'All'

// Derived from the data, so adding a project with a new category adds its filter chip automatically.
const categories = [ALL, ...Array.from(new Set(workData.map(p => p.category)))]

// Project showcase: filter chips, the project grid, and a link out to GitHub for everything else.
const Work = () => {
  const [activeCategory, setActiveCategory] = useState(ALL)
  const projects = activeCategory === ALL
    ? workData
    : workData.filter(p => p.category === activeCategory)

  return (
    <Section id='work'>
      <SectionHeading
        eyebrow='My portfolio'
        title='My latest work'
        description='A selection of projects spanning web, mobile, cloud, and machine learning, built solo and with teams.'
        descriptionSpacing='mt-5 mb-10'
      />

      <CategoryFilter categories={categories} active={activeCategory} onChange={setActiveCategory} />

      <motion.div
      layout
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6'>
        {projects.map((project)=>(
            <ProjectCard key={project.title} project={project} />
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
    </Section>
  )
}

export default Work

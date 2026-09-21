import React from 'react'
import { motion } from "motion/react"

// A single project in the Work grid. Renders whatever a workData entry provides; optional fields
// (org, link, status) are simply skipped when absent.
const ProjectCard = ({ project }) => (
  <motion.div
    // `layout` animates the card sliding into its new grid position when the category filter changes.
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
      {/* Flat filled tags instead of outlined pills keep a dense grid visually calm. */}
      <div className='flex flex-wrap gap-1.5 mb-5'>
          {project.tech.map((tech, i)=>(
              <span key={i} className='text-xs bg-gray-100 rounded px-2 py-0.5 text-gray-600 dark:bg-white/5 dark:text-white/55'>{tech}</span>
          ))}
      </div>
      {/* mt-auto pins this row to the bottom so the links line up across cards of different heights. */}
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
)

export default ProjectCard

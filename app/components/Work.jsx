import { assets, workData, GITHUB_PROFILE } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
        My portfolio
      </motion.h4>
        <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo'>
          My latest work
        </motion.h2>
        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
          A selection of projects spanning web, mobile, cloud, and machine learning — solo and with teams.
        </motion.p>

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.9, duration: 0.6}}
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
        {workData.map((project, index)=>(
            <motion.div
            whileHover={{scale: 1.02}}
            transition={{duration: 0.3}}
            key={index}
            className='flex flex-col border-[0.5px] border-gray-400 rounded-xl p-6 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white/50 dark:hover:bg-darkHover/50 dark:hover:shadow-white'>
                <div className='flex items-start justify-between gap-3 mb-3'>
                    <span className='text-xs font-medium border-[0.5px] border-gray-400 rounded-full px-3 py-1 text-gray-600 dark:border-white/40 dark:text-white/80'>{project.category}</span>
                    <span className='text-xs text-gray-500 whitespace-nowrap dark:text-white/50'>{project.type} · {project.year}</span>
                </div>
                <h3 className='font-semibold text-gray-700 dark:text-white'>{project.title}</h3>
                {project.org && <p className='text-xs text-gray-500 mt-0.5 dark:text-white/50'>{project.org}</p>}
                <p className='text-sm text-gray-600 mt-3 flex-1 dark:text-white/80'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mt-4'>
                    {project.tech.map((tech, i)=>(
                        <span key={i} className='text-xs border-[0.5px] border-gray-400 rounded-full px-2.5 py-1 text-gray-600 dark:border-white/30 dark:text-white/70'>{tech}</span>
                    ))}
                </div>
                {project.githubLink ? (
                    <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 text-sm mt-5 text-gray-700 dark:text-white'>
                        View Code
                        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='' className='w-3'/>
                    </a>
                ) : (
                    <span className='text-sm mt-5 text-gray-500 dark:text-white/50'>{project.status || 'No public link yet'}</span>
                )}
            </motion.div>
        ))}
      </motion.div>
      <motion.a
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 1.1, duration: 0.5}}
      href={GITHUB_PROFILE}
      target='_blank'
      rel='noopener noreferrer'
      className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        Show more
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
        alt='Right arrow'
        className='w-4'/>
      </motion.a>
    </motion.div>
  )
}

export default Work

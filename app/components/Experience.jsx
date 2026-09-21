import { assets, experienceData, educationData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Experience = ({isDarkMode}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='experience' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
        Career
      </motion.h4>
      <motion.h2
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>
        Experience & Education
      </motion.h2>
      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Where I&apos;ve worked, studied, and trained.
      </motion.p>

      <motion.div
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{delay: 0.8, duration: 0.6}}
      className='max-w-3xl mx-auto border-[0.5px] border-gray-400 rounded-xl p-6 sm:p-8 hover:shadow-black duration-500 dark:border-white/50 dark:hover:shadow-white'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4'>
            <div>
                <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>{experienceData.role}</h3>
                <p className='text-gray-600 dark:text-white/80'>{experienceData.company}</p>
            </div>
            <span className='text-sm text-gray-500 dark:text-white/60 whitespace-nowrap'>{experienceData.period}</span>
        </div>
        <ul className='list-disc pl-5 flex flex-col gap-2 text-sm text-gray-600 dark:text-white/80'>
            {experienceData.points.map((point, index)=>(
                <li key={index}>{point}</li>
            ))}
        </ul>
        <div className='flex flex-wrap gap-2 mt-5'>
            {experienceData.tech.map((tech, index)=>(
                <span key={index} className='text-xs border-[0.5px] border-gray-400 rounded-full px-3 py-1 text-gray-700 dark:border-white/40 dark:text-white/80'>{tech}</span>
            ))}
        </div>
      </motion.div>

      <motion.div
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{delay: 1, duration: 0.6}}
      className='max-w-3xl mx-auto grid sm:grid-cols-2 gap-5 mt-8'>
        {educationData.map((edu, index)=>(
            <div key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white/50 dark:hover:bg-darkHover/50'>
                <div className='flex items-center gap-3 mb-2'>
                    <Image src={isDarkMode ? assets.edu_icon_dark : assets.edu_icon} alt='' className='w-6'/>
                    <span className='text-sm text-gray-500 dark:text-white/60'>{edu.period}</span>
                </div>
                <h3 className='font-semibold text-gray-700 dark:text-white'>{edu.title}</h3>
                <p className='text-sm text-gray-600 dark:text-white/80'>{edu.place}</p>
                <p className='text-sm text-gray-600 mt-2 dark:text-white/70'>{edu.description}</p>
            </div>
        ))}
      </motion.div>

      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 1.2, duration: 0.5}}
      className='text-center text-sm text-gray-500 mt-8 dark:text-white/60'>
        Also volunteered as a Mathematics teacher and district coordinator with Sasnaka Sansada (2021 - 2023), teaching STEM to government-school students.
      </motion.p>
    </motion.div>
  )
}

export default Experience

import { assets } from '@/assets/assets'
import { experienceData, educationData } from '@/data/content'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import Section from './Section'
import SectionHeading from './SectionHeading'

// Career history: the featured role card, education and training cards, and a volunteering note.
// Needs isDarkMode because the education icon is a PNG with separate light and dark versions.
const Experience = ({isDarkMode}) => {
  return (
    <Section id='experience'>
      <SectionHeading
        eyebrow='Career'
        title='Experience & Education'
        description={<>Where I&apos;ve worked, studied, and trained.</>}
      />

      {/* The thick accent left border marks this as the primary card in the section. */}
      <motion.div
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{delay: 0.4, duration: 0.6}}
      className='max-w-3xl mx-auto bg-white border-[0.5px] border-gray-300 border-l-4 border-l-accent dark:border-l-accentSoft rounded-xl p-6 sm:p-8 hover:shadow-lg duration-500 dark:bg-darkHover/20 dark:border-white/20'>
        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-5'>
            <div>
                <h3 className='text-lg font-semibold text-gray-700 dark:text-darkText'>{experienceData.role}</h3>
                <p className='text-accent dark:text-accentSoft font-medium'>{experienceData.company}</p>
            </div>
            <span className='text-sm text-gray-500 dark:text-white/60 whitespace-nowrap sm:pt-1'>{experienceData.period}</span>
        </div>
        <ul className='flex flex-col gap-4'>
            {experienceData.points.map(({type, text}, index)=>(
                <li key={index} className='flex gap-3 text-sm text-gray-600 leading-relaxed dark:text-white/80'>
                    {/* Custom dot instead of list-disc so its colour can follow the accent in both themes. */}
                    <span className='mt-2 w-1.5 h-1.5 rounded-full bg-accent dark:bg-accentSoft shrink-0'></span>
                    <span>
                      {text}
                      <span className='ml-2 align-middle text-[10px] uppercase tracking-wider border-[0.5px] border-gray-300 rounded-full px-2 py-0.5 text-gray-500 whitespace-nowrap dark:border-white/20 dark:text-white/50'>{type}</span>
                    </span>
                </li>
            ))}
        </ul>
        <div className='flex flex-wrap gap-2 mt-6'>
            {experienceData.tech.map((tech, index)=>(
                <span key={index} className='text-xs border-[0.5px] border-gray-300 rounded-full px-3 py-1 text-gray-600 dark:border-white/20 dark:text-white/70'>{tech}</span>
            ))}
        </div>
      </motion.div>

      <motion.div
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{delay: 0.5, duration: 0.6}}
      className='max-w-3xl mx-auto grid sm:grid-cols-2 gap-5 mt-6'>
        {educationData.map((edu, index)=>(
            <div key={index} className='flex flex-col bg-white border-[0.5px] border-gray-300 rounded-xl p-6 hover:border-accent hover:shadow-lg duration-500 dark:bg-darkHover/20 dark:border-white/20 dark:hover:border-accent'>
                <div className='flex items-center gap-3 mb-3'>
                    <Image src={isDarkMode ? assets.edu_icon_dark : assets.edu_icon} alt='' className='w-6'/>
                    <span className='text-xs uppercase tracking-wider text-gray-500 dark:text-white/50'>{edu.period}</span>
                </div>
                <h3 className='font-semibold text-gray-700 dark:text-darkText'>{edu.title}</h3>
                <p className='text-sm text-accent dark:text-accentSoft mt-0.5'>{edu.place}</p>
                <p className='text-sm text-gray-600 leading-relaxed mt-3 dark:text-white/70'>{edu.description}</p>
            </div>
        ))}
      </motion.div>

      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.6, duration: 0.5}}
      className='text-center text-sm text-gray-500 max-w-2xl mx-auto mt-8 dark:text-white/60'>
        Also volunteered as a Mathematics teacher and district coordinator with Sasnaka Sansada (2021 - 2023), teaching STEM to government-school students.
      </motion.p>
    </Section>
  )
}

export default Experience

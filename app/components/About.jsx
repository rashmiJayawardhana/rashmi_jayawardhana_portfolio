import { assets, infoList, toolsData, competencies } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='about' className='w-full px-[12%] py-20 scroll-mt-20 bg-lightHover dark:bg-darkHover/20'>
      <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo text-accent dark:text-accentSoft'>
          Introduction
      </motion.h4>
      <motion.h2
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-4xl sm:text-5xl font-Ovo'>
        About me
      </motion.h2>
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8}}
      className='flex w-full flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 mt-16'>
        <motion.div
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.6}}
        className='w-64 sm:w-80 shrink-0'>
            <div className='rounded-3xl overflow-hidden flex items-end justify-center border-[0.5px] border-gray-300 bg-gradient-to-b from-accent/25 to-white dark:border-white/20 dark:from-accent/25 dark:to-darkTheme'>
              <Image src={assets.user_image} alt='Rashmi Jayawardhana' className='w-full'/>
            </div>
        </motion.div>
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.5}}
        className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo text-gray-600 dark:text-white/80'>I&apos;m a full-stack software engineer with a year of experience building production web and mobile applications using React, Angular, React Native, Spring Boot, and Node.js. I&apos;ve delivered scalable systems with microservices architecture and real-time features, and I&apos;m comfortable working across cloud and DevOps workflows with a strong focus on clean, well-tested code. I enjoy collaborating in teams and take pride in turning requirements into reliable products.</p>
          <motion.ul
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8, delay: 0.7}}
          className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description}, index)=>(
                <motion.li
                whileHover={{y: -4}}
                className='bg-white border-[0.5px] border-gray-300 rounded-xl p-6 hover:border-accent hover:shadow-lg duration-500 dark:bg-darkTheme/40 dark:border-white/20 dark:hover:border-accent' key={index}>
                    <Image src={isDarkMode ? iconDark : icon} alt='' className='w-7'/>
                    <h3 className='my-3 font-semibold text-gray-700 dark:text-darkText'>{title}</h3>
                    <p className='text-gray-600 text-sm leading-relaxed dark:text-white/70'>{description}</p>
                </motion.li>
            ))}
          </motion.ul>

          <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.9}}
          className='mt-10'>
            <h4 className='mb-5 text-gray-700 font-Ovo text-lg dark:text-white/80'>Core Competencies</h4>
            <div className='flex flex-col gap-3'>
                {competencies.map(({category, items}, index)=>(
                    <div key={index} className='flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-4'>
                        <span className='w-full sm:w-36 shrink-0 text-xs uppercase tracking-wider text-gray-500 sm:pt-1.5 dark:text-white/50'>{category}</span>
                        <div className='flex flex-wrap gap-2'>
                            {items.map((item, i)=>(
                                <span key={i} className='text-xs sm:text-sm bg-white border-[0.5px] border-gray-300 rounded-full px-3 py-1 text-gray-700 hover:border-accent hover:text-accent dark:hover:text-accentSoft duration-300 dark:bg-darkTheme/40 dark:border-white/20 dark:text-white/80'>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>

          <motion.h4
          initial={{y: 20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 1.1}}
          className='mt-10 mb-5 text-gray-700 font-Ovo text-lg dark:text-white/80'>Tools I use
          </motion.h4>
          <motion.ul
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 1.2}}
          className='flex flex-wrap items-center gap-3 sm:gap-4'>
            {toolsData.map((tool, index)=>(
                <motion.li
                whileHover={{y: -4}}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square bg-white border-[0.5px] border-gray-300 rounded-lg duration-500 hover:border-accent dark:bg-darkTheme/40 dark:border-white/20' key={index}>
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About

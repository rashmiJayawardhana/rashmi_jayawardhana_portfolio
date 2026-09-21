import { assets } from '@/assets/assets'
import { GITHUB_PROFILE, LINKEDIN_PROFILE, RESUME_URL } from '@/data/profile'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { GithubIcon, LinkedinIcon } from './Icons'

// Hero section: first thing visitors see. id='top' is the target of the Home link and back-to-top button.
const Header = () => {
  return (
    <div id='top' className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-32 pb-24'>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      className='p-1 rounded-full bg-gradient-to-br from-accent/40 to-lightHover dark:to-darkHover'
      >
        <Image src={assets.profile_img} alt='Rashmi Jayawardhana' className='rounded-full w-32 border-4 border-white dark:border-darkTheme'/>
      </motion.div>

      {/* Availability badge: the pinging dot draws the eye to the job-seeking status. */}
      <motion.div
      initial={{y: -10, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.2}}
      className='flex items-center gap-2 text-xs sm:text-sm border-[0.5px] border-gray-400 rounded-full px-4 py-1.5 text-gray-600 dark:border-white/30 dark:text-white/80'>
        <span className='relative flex w-2 h-2'>
          <span className='absolute inline-flex w-full h-full rounded-full bg-accent dark:bg-accentSoft opacity-75 animate-ping'></span>
          <span className='relative inline-flex w-2 h-2 rounded-full bg-accent dark:bg-accentSoft'></span>
        </span>
        Open to Full Stack Software Engineer roles
      </motion.div>

      <motion.h3
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      className='flex items-end gap-2 text-lg md:text-xl font-Ovo'>Hi! I&apos;m Rashmi Jayawardhana <Image src={assets.hand_icon} alt='' className='w-6'/>
      </motion.h3>

      <motion.h1
      initial={{y: -30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay: 0.5}}
      className='text-4xl sm:text-6xl lg:text-7xl leading-tight font-Ovo'>Full-Stack Software Engineer
      </motion.h1>

      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.7}}
      className='max-w-xl mx-auto font-Ovo text-gray-600 dark:text-white/80'>Final-year IT undergraduate at the University of Moratuwa with a year of experience building production web and mobile apps. Based in Panadura, Sri Lanka.
      </motion.p>

      {/* Contact is the filled primary action; the resume download is the outlined secondary action. */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
        href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-accent hover:border-accent duration-500 dark:bg-accent dark:border-accent dark:hover:bg-accentSoft dark:hover:border-accentSoft dark:hover:text-darkTheme'>Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.a>
        <motion.a
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1}}
        href={RESUME_URL} download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white hover:bg-lightHover duration-500 dark:bg-transparent dark:text-darkText dark:border-white/50 dark:hover:bg-darkHover'>Download Resume <Image src={assets.download_icon} alt='' className='w-4 dark:invert'/>
        </motion.a>
      </div>

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 1.1}}
      className='flex items-center gap-4 mt-2'>
        <a href={GITHUB_PROFILE} target='_blank' rel='noopener noreferrer' aria-label='GitHub'
          className='w-10 h-10 flex items-center justify-center border-[0.5px] border-gray-400 rounded-full text-gray-700 hover:text-accent dark:hover:text-accentSoft hover:border-accent hover:-translate-y-1 duration-500 dark:border-white/30 dark:text-white/80'>
          <GithubIcon />
        </a>
        <a href={LINKEDIN_PROFILE} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'
          className='w-10 h-10 flex items-center justify-center border-[0.5px] border-gray-400 rounded-full text-gray-700 hover:text-accent dark:hover:text-accentSoft hover:border-accent hover:-translate-y-1 duration-500 dark:border-white/30 dark:text-white/80'>
          <LinkedinIcon />
        </a>
      </motion.div>

      <motion.a
      href='#about'
      aria-label='Scroll to About'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 1.3}}
      className='mt-10 text-gray-400 animate-bounce hidden sm:block dark:text-white/40'>
        <svg viewBox='0 0 24 24' className='w-6' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='m6 9 6 6 6-6' />
        </svg>
      </motion.a>
    </div>
  )
}

export default Header

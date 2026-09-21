import { serviceData } from '@/assets/assets'
import React from 'react'
import { motion } from "motion/react"

const glyphs = {
    web: (
        <>
            <circle cx='48' cy='48' r='21' />
            <path d='M27 48h42' />
            <ellipse cx='48' cy='48' rx='9.5' ry='21' />
        </>
    ),
    mobile: (
        <>
            <rect x='33' y='24' width='30' height='48' rx='5' />
            <path d='M43 31h10' />
            <path d='M48 64h.01' strokeWidth='5' />
        </>
    ),
    design: (
        <>
            <path d='m59 27 10 10-27 27-13 3 3-13z' strokeLinejoin='round' />
            <path d='m54 32 10 10' />
        </>
    ),
    backend: (
        <>
            <rect x='27' y='27' width='42' height='15' rx='4' />
            <rect x='27' y='54' width='42' height='15' rx='4' />
            <path d='M37 34.5h.01' strokeWidth='5' />
            <path d='M37 61.5h.01' strokeWidth='5' />
        </>
    ),
}

const ServiceIcon = ({name}) => (
    <svg viewBox='0 0 96 96' className='w-10' xmlns='http://www.w3.org/2000/svg'>
        <rect width='96' height='96' rx='22' fill='#567257' />
        <g fill='none' stroke='#fff' strokeWidth='4' strokeLinecap='round'>
            {glyphs[name]}
        </g>
    </svg>
)

const Services = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='services' className='w-full px-[12%] py-20 scroll-mt-20 bg-lightHover dark:bg-darkHover/20'>
        <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo text-accent dark:text-accentSoft'>
          What I offer
        </motion.h4>
        <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-4xl sm:text-5xl font-Ovo'>
          My Services
        </motion.h2>
        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/80'>
          I build reliable, well-tested products across the stack, from responsive frontends to scalable backends and cloud-ready deployments.
        </motion.p>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.9, duration: 0.6}}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {serviceData.map(({icon, title, description}, index)=>(
                <motion.div
                  whileHover={{y: -6}}
                  key={index}
                  className='bg-white border-[0.5px] border-gray-300 rounded-xl p-8 hover:border-accent hover:shadow-lg duration-500 dark:bg-darkTheme/40 dark:border-white/20 dark:hover:border-accent'>
                    <ServiceIcon name={icon} />
                    <h3 className='text-lg font-semibold my-4 text-gray-700 dark:text-darkText'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-relaxed dark:text-white/70'>{description}</p>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services

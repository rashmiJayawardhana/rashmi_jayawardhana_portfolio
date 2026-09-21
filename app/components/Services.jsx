import { serviceData } from '@/data/content'
import React from 'react'
import { motion } from "motion/react"
import Section from './Section'
import SectionHeading from './SectionHeading'
import ServiceIcon from './ServiceIcon'

// "What I offer": one card per entry in serviceData.
const Services = () => {
  return (
    <Section id='services' className='bg-lightHover dark:bg-darkHover/20'>
        <SectionHeading
          eyebrow='What I offer'
          title='My Services'
          description='I build reliable, well-tested products across the stack, from responsive frontends to scalable backends and cloud-ready deployments.'
        />

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
    </Section>
  )
}

export default Services

import { assets } from '@/assets/assets'
import { EMAIL } from '@/data/profile'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import Section from './Section'
import SectionHeading from './SectionHeading'
import useContactForm from '@/hooks/useContactForm'

// Colour for the result message under the form, keyed by submission status.
const STATUS_CLASSES = {
  success: 'text-accent dark:text-accentSoft',
  error: 'text-red-500',
}
const DEFAULT_STATUS_CLASS = 'text-gray-500 dark:text-white/60'

// Contact section. Presentation only: sending and state live in useContactForm.
const Contact = () => {
  const { result, status, onSubmit } = useContactForm()

  return (
    <Section
      id='contact'
      className='bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      <SectionHeading
        eyebrow='Connect with me'
        title='Get in touch'
        description={<>Have a role, a project, or a question in mind? Drop me a message and I&apos;ll get back to you.</>}
        descriptionSpacing='mt-5 mb-4'
      />
        <motion.a
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.8, duration: 0.5}}
        href={`mailto:${EMAIL}`}
        className='flex w-max mx-auto mb-12 text-sm text-gray-600 hover:text-accent dark:hover:text-accentSoft duration-300 dark:text-white/70'>
          {EMAIL}
        </motion.a>

        <motion.form
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{delay: 0.9, duration: 0.5}}
          onSubmit={onSubmit}
          className='max-w-2xl mx-auto'>
            {/* The `name` attributes below become the field names in the email Web3Forms sends. */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
                <motion.input
                 initial={{x: -50, opacity: 0}}
                 whileInView={{x: 0, opacity: 1}}
                 transition={{duration: 0.6, delay: 1}}
                 type='text'
                 placeholder='Enter your name'
                 required
                 className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white focus:border-accent dark:bg-darkHover/30 dark:border-white/90 dark:focus:border-accent transition'
                 name='name'/>
                <motion.input
                 initial={{x: 50, opacity: 0}}
                 whileInView={{x: 0, opacity: 1}}
                 transition={{duration: 0.6, delay: 1.1}}
                 type='email'
                 placeholder='Enter your email'
                 required
                 className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white focus:border-accent dark:bg-darkHover/30 dark:border-white/90 dark:focus:border-accent transition'
                 name='email'/>
            </div>
            <motion.textarea
              initial={{y: 100, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.6, delay: 1.2}}
              rows='6'
              placeholder='Enter your message'
              required
              className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 focus:border-accent dark:bg-darkHover/30 dark:border-white/90 dark:focus:border-accent transition'
              name='message'>
            </motion.textarea>
            {/* Disabled while sending so a double click cannot submit the message twice. */}
            <motion.button
              whileHover={{scale: 1.05}}
              transition={{duration: 0.3}}
              type='submit'
              disabled={status === 'sending'}
              className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-accent duration-500 disabled:opacity-60 dark:bg-accent dark:hover:bg-accentSoft dark:hover:text-darkTheme'>
                {status === 'sending' ? 'Sending...' : 'Submit now'}
                <Image src={assets.right_arrow_white}
                alt=''
                className='w-4'/>
            </motion.button>

            {result && (
              <p className={`mt-6 text-center text-sm ${STATUS_CLASSES[status] || DEFAULT_STATUS_CLASS}`}>{result}</p>
            )}
        </motion.form>
    </Section>
  )
}

export default Contact

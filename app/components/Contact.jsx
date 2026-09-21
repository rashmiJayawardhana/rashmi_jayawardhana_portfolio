import { assets, EMAIL } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8ad5be9b-7b98-4120-a6a7-6d49b8673731");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("Thanks! Your message has been sent. I'll get back to you soon.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setStatus("error");
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='contact'
      className='w-full px-[12%] py-20 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      <motion.h4
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo text-accent dark:text-accentSoft'>
        Connect with me
      </motion.h4>
        <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-4xl sm:text-5xl font-Ovo'>
          Get in touch
        </motion.h2>
        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}
        className='text-center max-w-2xl mx-auto mt-5 mb-4 font-Ovo text-gray-600 dark:text-white/80'>
          Have a role, a project, or a question in mind? Drop me a message and I&apos;ll get back to you.
        </motion.p>
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
              <p className={`mt-6 text-center text-sm ${
                status === 'success' ? 'text-accent dark:text-accentSoft' : status === 'error' ? 'text-red-500' : 'text-gray-500 dark:text-white/60'
              }`}>{result}</p>
            )}
        </motion.form>

    </motion.div>
  )
}

export default Contact

import { assets } from '@/assets/assets'
import { EMAIL, GITHUB_PROFILE, LINKEDIN_PROFILE, HACKERRANK_PROFILE } from '@/data/profile'
import Image from 'next/image'
import React from 'react'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

// Profiles shown as icon buttons. HackerRank has no icon, so it is rendered separately as a text link.
const socials = [
  { href: GITHUB_PROFILE, label: 'GitHub', Icon: GithubIcon },
  { href: LINKEDIN_PROFILE, label: 'LinkedIn', Icon: LinkedinIcon },
]

// Needs isDarkMode because the logo is a PNG with separate light and dark versions.
const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Rashmi Jayawardhana' className='w-72 mx-auto mb-3'/>
        <a href={`mailto:${EMAIL}`} className='w-max flex items-center gap-2 mx-auto text-gray-600 hover:text-accent dark:hover:text-accentSoft duration-300 dark:text-white/80'>
          <MailIcon className='w-5' />
          {EMAIL}
        </a>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        {/* The page is prerendered at build time, so the client year can differ from the baked HTML after New Year. */}
        <p suppressHydrationWarning className='text-sm text-gray-600 dark:text-white/70'>© {new Date().getFullYear()} Rashmi Jayawardhana. All rights reserved.</p>
        <ul className='flex items-center gap-4 justify-center mt-4 sm:mt-0'>
            {socials.map(({href, label, Icon})=>(
              <li key={label}>
                <a target='_blank' rel='noopener noreferrer' href={href} aria-label={label}
                   className='w-9 h-9 flex items-center justify-center border-[0.5px] border-gray-400 rounded-full text-gray-700 hover:text-accent dark:hover:text-accentSoft hover:border-accent hover:-translate-y-1 duration-300 dark:border-white/30 dark:text-white/80'>
                  <Icon className='w-4' />
                </a>
              </li>
            ))}
            <li>
              <a target='_blank' rel='noopener noreferrer' href={HACKERRANK_PROFILE}
                 className='text-sm text-gray-600 hover:text-accent dark:hover:text-accentSoft duration-300 dark:text-white/70'>
                HackerRank
              </a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

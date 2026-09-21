import { assets } from '@/assets/assets'
import { navLinks } from '@/data/content'
import Image from 'next/image'
import React, { useRef } from 'react'
import useScrolled from '@/hooks/useScrolled'
import useActiveSection from '@/hooks/useActiveSection'

const sectionIds = navLinks.map(({id}) => id)

// Fixed top navigation with theme toggle, mobile slide-in menu, and a back-to-top button.
const Navbar = ({isDarkMode, onToggleTheme}) => {
    const isScroll = useScrolled()
    const activeSection = useActiveSection(sectionIds)
    const sideMenuRef = useRef();

    // The mobile menu starts off-screen at -right-64 (16rem); translating by 16rem slides it in and out.
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

  return (
    <>
        {/* Decorative gradient behind the hero, light mode only. */}
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
            <Image src={assets.header_bg_color} alt='' className='w-full'/>
        </div>
        {/* Transparent over the hero; gains a blurred background once the page scrolls so links stay readable over content. */}
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : "" }`}>
            <a href="#top">
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Rashmi Jayawardhana" className='w-64 cursor-pointer mr-14'/>
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "":"bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
                {navLinks.map(({id, label})=>(
                    <li key={id}>
                        <a
                          className={`font-Ovo duration-300 hover:text-accent dark:hover:text-accentSoft ${activeSection === id ? 'text-accent dark:text-accentSoft' : ''}`}
                          href={`#${id}`}>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='flex items-center gap-4'>
                <button onClick={onToggleTheme} aria-label='Toggle dark mode'>
                    <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
                </button>

                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo hover:bg-accent hover:border-accent hover:text-white duration-500 dark:border-white/50'>Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/></a>

                <button className='block md:hidden ml-3' onClick={openMenu} aria-label='Open menu'>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
                </button>
            </div>

            {/* Mobile menu: each link also closes the menu so it does not cover the section being jumped to. */}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-lightHover transition duration-500 dark:bg-darkHover dark:text-darkText'>
                <div className='absolute right-6 top-6' onClick={closeMenu}><Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/></div>
                {navLinks.map(({id, label})=>(
                    <li key={id}>
                        <a
                          className={`font-Ovo ${activeSection === id ? 'text-accent dark:text-accentSoft' : ''}`}
                          onClick={closeMenu}
                          href={`#${id}`}>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

        {/* Hidden at the top of the page; pointer-events-none keeps the invisible button from catching clicks. */}
        <a
          href='#top'
          aria-label='Back to top'
          className={`fixed bottom-8 right-8 z-40 w-11 h-11 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-accent duration-500 dark:bg-white dark:text-black dark:hover:bg-accent dark:hover:text-white ${isScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <svg viewBox='0 0 24 24' className='w-5' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <path d='m18 15-6-6-6 6' />
            </svg>
        </a>
    </>
  )
}

export default Navbar

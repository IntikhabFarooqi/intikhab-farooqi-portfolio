"use client";
import React, { useState } from 'react'
import { font } from './font/font'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };
  
  return (
    <div className={`${font.className} flex flex-col md:flex-row px-4 py-2 bg-black/30 backdrop-blur-lg rounded-3xl border-gray-600 border justify-between items-center text-white w-[90%] md:w-[70%] mx-auto absolute top-4 left-1/2 transform -translate-x-1/2 z-10`}>
        <div className='font-bold text-fuchsia-400 flex justify-between items-center text-xl md:text-2xl mb-2 md:mb-0 w-full md:w-auto'>
            Intikhab.
            <button 
              className='md:hidden text-white focus:outline-none'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
        </div>
        
        {/* Desktop navigation */}
        <div className='hidden md:flex gap-x-16'>
            <div 
              className='cursor-pointer hover:text-fuchsia-400 transition-colors duration-300'
              onClick={() => scrollToSection('work')}
            >
                Work  
            </div>
            <div 
              className='cursor-pointer hover:text-fuchsia-400 transition-colors duration-300'
              onClick={() => scrollToSection('projects')}
            >
                Portfolio  
            </div>
            <div 
              className='cursor-pointer hover:text-fuchsia-400 transition-colors duration-300'
              onClick={() => scrollToSection('skills')}
            >
                Skills  
            </div>
        </div>
        
        {/* Desktop contact button */}
        <div 
          className='hidden md:block bg-gradient-to-r from-white via-fuchsia-300/90 to-indigo-300/90
    bg-[length:200%_200%] bg-[position:0%_50%]
    transition-all duration-500 ease-out
    hover:bg-[position:100%_50%]
    shadow-md hover:shadow-xl text-black px-4 py-2 rounded-2xl cursor-pointer'
          onClick={() => scrollToSection('contact')}
        >
            Contact  
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className='md:hidden w-full mt-4 space-y-4 pb-4'>
            <div 
              className='cursor-pointer hover:text-fuchsia-400 transition-colors duration-300 text-base'
              onClick={() => scrollToSection('work')}
            >
                Work  
            </div>
            <div 
              className='cursor-pointer hover:text-fuchsia-400 transition-colors duration-300 text-base'
              onClick={() => scrollToSection('projects')}
            >
                Portfolio  
            </div>
            <div 
              className='cursor-pointer hover:text-fuchsia-400 transition-colors duration-300 text-base'
              onClick={() => scrollToSection('skills')}
            >
                Skills  
            </div>
            <div 
              className='bg-gradient-to-r from-white via-fuchsia-300/90 to-indigo-300/90
    bg-[length:200%_200%] bg-[position:0%_50%]
    transition-all duration-500 ease-out
    hover:bg-[position:100%_50%]
    shadow-md hover:shadow-xl text-black px-4 py-2 rounded-2xl cursor-pointer w-fit'
              onClick={() => scrollToSection('contact')}
            >
                Contact  
            </div>
          </div>
        )}
    </div>
  )
}

export default Nav

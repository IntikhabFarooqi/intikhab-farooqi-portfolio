import React from 'react'
import Nav from './Nav'
import { font } from './font/font'
import { AuroraBackground } from './ui/aurora-background'

const Hero = () => {
  return (
    <AuroraBackground className="bg-black">
      <div className={`${font.className} min-h-screen relative w-[100%]`}>
        <Nav/>
        <div className='flex flex-col md:flex-row items-center justify-between px-4 md:px-20 text-white min-h-[40rem] pt-32 md:pt-20 pb-8'>
        <div className='flex flex-col gap-4 w-full md:w-auto mb-8 md:mb-0'>
          <p className='text-3xl md:text-5xl font-bold'><span className='text-fuchsia-400'>Hello,</span> I'm Intikhab Farooqi</p>
            <p className='text-sm md:text-base'>Full Stack Engineer. Blockchain Developer. AI Engineer</p>
            <p className='max-w-xl text-sm md:text-base'>I'm a full stack engineer with over 10 years of experience in the industry with a passion for building web and mobile applications. I'm also a blockchain developer and an AI engineer.</p>
            <div className='flex space-x-4'>

            <button className='bg-gradient-to-r from-white via-fuchsia-300/90 to-indigo-300/90
                bg-[length:200%_200%] bg-[position:0%_50%]
                transition-all duration-500 ease-out
                hover:bg-[position:100%_50%]
                shadow-md hover:shadow-xl w-fit text-black px-4 py-2 rounded-2xl text-sm md:text-base'>
                Contact Me
            </button>
            
            </div>
        </div>
        <div className='w-full md:w-auto'>
            <img src='/mainIconsdark.svg' className='w-full h-auto md:h-[20rem] max-w-xs mx-auto'/>
        </div>
      </div>
    </div>
    </AuroraBackground>
  )
}

export default Hero

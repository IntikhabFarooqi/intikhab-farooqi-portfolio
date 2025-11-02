"use client";
import React, { useState, useEffect } from 'react'
import { font } from './font/font'
import { BackgroundBeams } from './ui/background-beams'
import { DraggableCardContainer, DraggableCardBody } from './ui/draggable-card'

const Work = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const workExperience = [
    {
      company: "Pluton",
      position: "Blockchain Developer",
      duration: "Feb 14 - May 15",
      description: "Learnt more about JavaScript, Solidity, Web3 and Rust and build a few projects and contributed with the team to deliver smart contracts that never disappointed."
    },
    {
      company: "Decrypted Labs", 
      position: "Blockchain Developer",
      duration: "June 15 - July 17",
      description: "Built smart contracts and DeFi applications using Solidity and Web3 technologies."
    },
    {
      company: "Logisol Technologies",
      position: "Tech Lead Full Stack Engineer",
      duration: "May 22 - Present",
      description: "Working on full-stack development projects like CMS, ERPs & Ecommerce Websites and Mobile Apps and collaborating with cross-functional teams."
    },
    {
      company: "i-MSConsulting",
      position: "Full Stack Developer", 
      duration: "July 17 - Dec 20",
      description: "Developed machine learning models and AI solutions for various ERP applications & Mainly focused on backend alongside with a little bit of frontend for HRMs."
    },
    {
      company: "Tech Haven Pvt. Ltd.",
      position: "Full Stack Developer",
      duration: "Dec 20 - May 22", 
      description: "Created responsive user interfaces using React, TypeScript, and modern CSS frameworks. Along side with error-free backends in SQL Server, MySQL and ExpressJS"
    },
  ]

  return (
    <div id="work" className={`${font.className} relative min-h-screen bg-black overflow-hidden`}>
      <BackgroundBeams />
      <div className="relative z-10 pt-12 px-4 md:px-20 text-white">
        <div className='text-sm md:text-base'>
            Employment History
        </div>
        <div className='text-3xl md:text-5xl font-bold mt-2 mb-2'>
            Places Where I've Worked
        </div>
        <div className='mb-12 text-sm md:text-base'>
            Hint: drag the cards 😉
        </div>
        
                <div className="relative w-full min-h-[80vh] mt-10 md:mt-20 flex justify-center items-center pb-10 md:pb-20">
          {isClient && (
            <DraggableCardContainer className="relative w-full max-w-[800px] h-[500px] md:h-[600px]">
              {workExperience.map((work, index) => {
                const scatteredPositions = [
                  { top: '50px', left: '0px', rotate: '-25deg', zIndex: 5 },
                  { top: '80px', left: '150px', rotate: '-12deg', zIndex: 3 },
                  { top: '60px', left: '300px', rotate: '0deg', zIndex: 4 },
                  { top: '100px', left: '450px', rotate: '12deg', zIndex: 2 },
                  { top: '40px', left: '600px', rotate: '25deg', zIndex: 1 }
                ];
                
                const scatteredPositionsMobile = [
                  { top: '30px', left: '0px', rotate: '-15deg', zIndex: 5 },
                  { top: '50px', left: '80px', rotate: '-8deg', zIndex: 3 },
                  { top: '40px', left: '160px', rotate: '0deg', zIndex: 4 },
                  { top: '70px', left: '240px', rotate: '8deg', zIndex: 2 },
                  { top: '20px', left: '320px', rotate: '15deg', zIndex: 1 }
                ];
                
                return (
                  <React.Fragment key={index}>
                    {/* Desktop version */}
                    <div
                      className="absolute hidden md:block"
                      style={{
                        top: scatteredPositions[index].top,
                        left: scatteredPositions[index].left,
                        transform: `rotate(${scatteredPositions[index].rotate})`,
                        zIndex: scatteredPositions[index].zIndex
                      }}
                    >
                      <DraggableCardBody 
                        className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 w-[250px]"
                      >
                        <div className="text-white">
                          <h3 className="text-xl font-bold text-fuchsia-400 mb-2">{work.company}</h3>
                          <h4 className="text-lg font-semibold mb-2">{work.position}</h4>
                          <p className="text-sm text-gray-400 mb-4">{work.duration}</p>
                          <p className="text-sm leading-relaxed">{work.description}</p>
                        </div>
                      </DraggableCardBody>
                    </div>
                    {/* Mobile version */}
                    <div
                      className="absolute md:hidden"
                      style={{
                        top: scatteredPositionsMobile[index].top,
                        left: scatteredPositionsMobile[index].left,
                        transform: `rotate(${scatteredPositionsMobile[index].rotate})`,
                        zIndex: scatteredPositionsMobile[index].zIndex
                      }}
                    >
                      <DraggableCardBody 
                        className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 w-[180px]"
                      >
                        <div className="text-white">
                          <h3 className="text-base font-bold text-fuchsia-400 mb-1">{work.company}</h3>
                          <h4 className="text-sm font-semibold mb-1">{work.position}</h4>
                          <p className="text-xs text-gray-400 mb-2">{work.duration}</p>
                          <p className="text-xs leading-relaxed">{work.description}</p>
                        </div>
                      </DraggableCardBody>
                    </div>
                  </React.Fragment>
                );
              })}
            </DraggableCardContainer>
          )}
        </div>
      </div>
    </div>
  )
}

export default Work

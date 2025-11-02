"use client";
import React, { useState, useEffect } from 'react'
import { font } from './font/font'
import { BackgroundBeams } from './ui/background-beams'

const Skills = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const skills = [
    { name: 'REACT', color: 'text-white' },
    { name: 'NEXT.JS', color: 'text-white' },
    { name: 'EXPRESS', color: 'text-white' },
    { name: 'NODE.JS', color: 'text-white' },
    { name: 'C#', color: 'text-white' },
    { name: '.NET', color: 'text-white' },
    { name: 'ANGULAR', color: 'text-white' },
    { name: 'MYSQL', color: 'text-white' },
    { name: 'AWS', color: 'text-white' },
    { name: 'SOLIDITY', color: 'text-white' },
    { name: 'SWIFT', color: 'text-white' },
    { name: 'REACT NATIVE', color: 'text-white' },
    { name: 'PYTHON', color: 'text-white' },
    { name: 'DOCKER', color: 'text-white' },
    { name: 'PYTORCH', color: 'text-white' },
    { name: 'RUST', color: 'text-white' }
  ]

  return (
    <div id="skills" className={`${font.className} relative min-h-screen bg-black overflow-hidden`}>
      <BackgroundBeams />
      <div className="relative z-10 pt-12 px-20 text-white">
        <div className="text-sm text-gray-400 mb-4">
          Technical Expertise
        </div>
        <div className='text-5xl font-bold mt-2 mb-12'>
          My <span className="text-fuchsia-400">Skills</span>
        </div>
        
        {isClient && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="h-32 w-full flex items-center justify-center">
                <span className={`${skill.color} text-4xl font-extrabold`}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Skills

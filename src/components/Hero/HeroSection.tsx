'use client'
import React from 'react'

import MyButton from '../shared/MyButton'
import { TextGenerateEffect } from '../ui/TextEffect'
import pak from '@/assets/Logo/PAKA.svg'

const HeroSection = () => {
  const h1 = `Pakistan's First AI Legal Assistant`
  return (
    <section className='relative h-screen w-full ' >
      {/* Apply the background image to this container */}
      <div
        className='absolute inset-0 bg-cover bg-center  backdrop-blur-sm  '
        style={{ backgroundImage: `url(${pak.src})`,opacity:0.1 }}
      ></div>

      <div className='relative opacity-100 z-10 flex w-full h-full flex-col items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* Main content at the top */}
        <div className='h-screen flex  w-full max-w-7xl flex-col justify-center items-end space-y-4 overflow-hidden text-center mx-auto my-4'>
          <div className='text-center mx-auto mt-96'>
            <h1
              style={{
                filter: 'blur(0px)',
                opacity: 1,
                willChange: 'auto',
                transform: 'none'
              }}
              className='text-center text-4xl font-semibold font-sans leading-tight text-foreground sm:text-7xl md:text-7xl  lg:text-8xl xl:text-8xl text-'
            >
              <h1>YourMunshi</h1>

              <span
                style={{ opacity: 1, willChange: 'auto', transform: 'none' }}
                className='inline-block px-1 md:px-2 text-balance font-semibold'
              >
                <TextGenerateEffect words={h1} />
              </span>
            </h1>
          </div>
          <div className='text-center mx-auto flex items-center justify-center my-8'>
            <MyButton button_text='Start Now' />
          </div>
        </div>

        {/* Button content moved to the bottom */}
      </div>
    </section>
  )
}

export default HeroSection

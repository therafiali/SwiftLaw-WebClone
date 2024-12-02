'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Foo, PlayButton } from './HeroSvg'
import MyButton from '../shared/MyButton'

const HeroSection = () => {
  // State to toggle between showing the image or the video
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Function to handle play button click
  const handlePlayClick = () => {
    setIsVideoPlaying(true) // Show the video and hide the image
  }

  return (
    <section className=''>
      <div className='relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8 '>
        {/* <div className='flex justify-center items-center '>
          <Link
            href={''}
            style={{ opacity: 1, willChange: 'auto', transform: 'none' }}
            className='flex  w-auto items-center justify-center space-x-2 rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent whitespace-pre'
          >
            <div className='w-fit rounded-full bg-accent px-2 pt-1 text-center text-xs font-medium text-primary sm:text-sm flex justify-center items-center '>
              <span className=''>📣 Blog Post</span>
            </div>
            <p className='text-xs font-medium text-primary sm:text-sm pt-1'>
              <span>Is ChatGPT Really Safe for Law?</span>
            </p>

            <Foo />
          </Link>
        </div> */}
        <div className='flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8 text-center mx-auto my-4'>
          <h1
            style={{
              filter: 'blur(0px)',
              opacity: 1,
              willChange: 'auto',
              transform: 'none'
            }}
            className='text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl'
          >
            <span
              style={{ opacity: 1, willChange: 'auto', transform: 'none' }}
              className='inline-block px-1 md:px-2 text-balance font-semibold'
            >
              YourMunshi Pakistan&apos;s First AI Legal Assistant
            </span>
          </h1>
        </div>
        <div className='text-center mx-auto flex items-center justify-center my-8'>
          <MyButton button_text='Start Now' />
        </div>
        <div
          style={{
            filter: 'blur(0px)',
            opacity: 1,
            willChange: 'auto',
            transform: 'none'
          }}
          className='relative mx-auto flex w-full items-center justify-center'
        >
          {/* <div className='class="relative border rounded-lg shadow-lg max-w-screen-lg mt-16"'>
            {/* If isVideoPlaying is false, show the image */}
            {/* {!isVideoPlaying && (
              <div className='relative cursor-pointer group rounded-md p-2 ring-1 ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10 backdrop-blur-md'>
                <img
                  src='https://www.tryswiftlaw.com/_next/image?url=%2Fdashboard.png&w=3840&q=75'
                  alt=''
                  width={1920}
                  height={1080}
                />
                <div className='absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl'>
                  <div className='z-30 bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-28'>
                    <div className='flex items-center justify-center bg-gradient-to-b from-primary/30 to-primary shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100'>
                      <div onClick={handlePlayClick}>
                        <PlayButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )} */}

            {/* If isVideoPlaying is true, show the video */}
            {isVideoPlaying && (
              <div className='relative'>
                <video
                  width='100%'
                  height='auto'
                  // controls
                  autoPlay
                  className='rounded-lg shadow-lg'
                >
                  <source
                    src='video.mp4' // Replace with actual video URL
                    type='video/mp4'
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
                  </div>
        {/* {!isVideoPlaying && (
          <div className='pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4'></div>
        )} */}
      </div>
    </section>
  )
}

export default HeroSection

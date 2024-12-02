import React from 'react'
import { TestimonialSVG } from '../Hero/HeroSvg'

const Feedback = () => {
  return (
    <div>
      <div className='relative container mx-auto px-4 py-16 max-w-7xl'>
        <div className='text-center space-y-4 pb-6 mx-auto'>
          <h2 className='text-sm text-primary font-mono font-medium tracking-wider uppercase'>
            Testimonial
          </h2>
          <h3 className='mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl'>
            What our users are saying
          </h3>
        </div>
        <div className='relative'>
          <div className='max-w-2xl mx-auto relative'>
            <div className='overflow-hidden'>
              <div
                style={{
                  transform: 'translate3d(0px, 0px, 0px)'
                }}
                className='flex -ml-4'
              >
                <div className='min-w-0 shrink-0 grow-0 basis-full pl-4'>
                  <div className='p-2 pb-5'>
                    <div className='text-center'>
                      <TestimonialSVG />
                      <div
                        style={{
                          opacity: 1,
                          filter: 'blur(0px)',
                          willChange: 'auto',
                          transform: 'translateY(-6px)'
                        }}
                        className=''
                      >
                        <h4 className='text-1xl font-semibold max-w-lg mx-auto px-10'>
                          I can&apos;t believe how much productivity leverage I&apos;m
                          getting
                        </h4>
                      </div>
                      <div className='mt-8'> </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback

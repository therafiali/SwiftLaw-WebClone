import React from 'react'
import Slide from '../Slider/Slide'

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
          <div className=' lg:max-w-3xl mx-auto relative px-8'>
            <div className='overflow-hidden'>
              <div
               
                className='  '
              >
                <Slide />
              </div>
            </div>
          </div>
          <div className='hidden sm:flex pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background'></div>
          <div className='hidden sm:flex pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background'></div>
        </div>
      </div>
    </div>
  )
}

export default Feedback

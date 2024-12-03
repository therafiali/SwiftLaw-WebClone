
import React from 'react'
import MyButton from '../shared/MyButton'

const Newsletter = () => {
  return (
    <div>
      <div className='bg-primary/10 rounded-xl py-16'>
        <div className='relative container mx-auto px-4 py-16 max-w-7xl'>
          <div className='text-center space-y-4 pb-6 mx-auto'>
            <h2 className='text-sm text-primary font-mono font-medium tracking-wider uppercase'>
              Ready to get started?
            </h2>
            <h3 className='mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl'>
              Use YourMunshi to empower your legal research with AI.
            </h3>
          </div>
          <div className='flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4'>
            <MyButton button_text='Get Started' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

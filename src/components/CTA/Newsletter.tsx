import React from 'react'

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
              Use YourMunshi to empower your firm with AI.
            </h3>
          </div>
          <div className='flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4'>
            <a
              className='items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto text-background flex gap-2'
              href='https://calendly.com/swiftlaw/swiftlaw-ai-drafting-assistant-onboarding'
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

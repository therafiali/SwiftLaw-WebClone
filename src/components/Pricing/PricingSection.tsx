import React from 'react'

const PricingSection = () => {
  return (
    <div>
      <div className='relative container mx-auto px-4 py-16 max-w-7xl'>
        <div className='text-center space-y-4 pb-6 mx-auto'>
          <h2 className='text-sm text-primary font-mono font-medium tracking-wider uppercase'>
            PRICING
          </h2>
          <h3 className='mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl'>
            Choose the plan that's right for you{' '}
          </h3>
        </div>
        <div className='flex justify-center mb-10'>
          <span className='mr-2 font-semibold'>Monthly</span>
          <label className='relative inline-flex items-center cursor-pointer'>
            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              <button
                type='button'
                role='switch'
                aria-checked='false'
                data-state='unchecked'
                value='on'
                className='peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input'
              >
                <span
                  data-state='unchecked'
                  className='pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
                />
              </button>
            </label>
          </label>
          <span className='ml-2 font-semibold'>Yearly</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 sm:2 gap-4'>
          <div
            style={{
              opacity: 1,
              transform: 'translateX(30px) scale(0.94)',
              willChange: 'auto'
            }}
            className='rounded-2xl border-[1px] p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative border-border z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] origin-right'
          >
            <div>
              <p className='text-base font-semibold text-muted-foreground'>
                BASIC
              </p>
              <p className='mt-6 flex items-center justify-center gap-x-2'>
                <span className='text-5xl font-bold tracking-tight text-foreground'>
                  $99
                </span>
                <span className='text-sm font-semibold leading-6 tracking-wide text-muted-foreground'>
                  / seat / month
                </span>
              </p>
              <p className='text-xs leading-5 text-muted-foreground'>
                billed monthly
              </p>
              <ul className='mt-5 gap-2 flex flex-col'>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>AI-powered review, editing, and drafting</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>Upload precedents and playbooks</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>Legal Research</span>
                </li>
              </ul>
              <hr className='w-full my-4'></hr>
              <a
                className='inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-white bg-white text-black'
                href='https://calendly.com/swiftlaw/swiftlaw-ai-drafting-assistant-onboarding'
              >
                Subscribe
              </a>
              <p className='mt-6 text-xs leading-5 text-muted-foreground'>
                A basic plan to get started
              </p>
            </div>
          </div>
          <div
            className='rounded-2xl p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative border-primary border-[2px] z-10'
            style={{ opacity: 1, transform: 'none', willChange: 'auto' }}
          >
            <div className='absolute top-0 right-0 bg-primary py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth={0}
                viewBox='0 0 576 512'
                className='text-white'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z' />
              </svg>
              <span className='text-white ml-1 font-sans font-semibold'>
                Popular
              </span>
            </div>
            <div>
              <p className='text-base font-semibold text-muted-foreground'>
                PRO
              </p>
              <p className='mt-6 flex items-center justify-center gap-x-2'>
                <span className='text-5xl font-bold tracking-tight text-foreground'>
                  $199
                </span>
                <span className='text-sm font-semibold leading-6 tracking-wide text-muted-foreground'>
                  / seat / {/* */}month
                </span>
              </p>
              <p className='text-xs leading-5 text-muted-foreground'>
                billed monthly
              </p>
              <ul className='mt-5 gap-2 flex flex-col'>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>AI-powered review, editing, and drafting</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>Upload precedents and playbooks</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>Legal Research</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>AI-powered contract automation</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>Web application for client form storage</span>
                </li>
              </ul>
              <hr className='w-full my-4' />
              <a
                className='inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-white bg-primary text-white'
                href='https://calendly.com/swiftlaw/swiftlaw-ai-drafting-assistant-onboarding'
              >
                Subscribe
              </a>
              <p className='mt-6 text-xs leading-5 text-muted-foreground'>
                Our full suite of AI-powered features
              </p>
            </div>
          </div>
          <div
            className='rounded-2xl border-[1px] p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative border-border z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] origin-left'
            style={{
              opacity: 1,
              transform: 'translateX(-30px) scale(0.94)',
              willChange: 'auto'
            }}
          >
            <div>
              <p className='text-base font-semibold text-muted-foreground'>
                ENTERPRISE
              </p>
              <p className='mt-6 flex items-center justify-center gap-x-2'>
                <span className='text-5xl font-bold tracking-tight text-foreground'>
                  Custom
                </span>
                <span className='text-sm font-semibold leading-6 tracking-wide text-muted-foreground'>
                  / seat / {/* */}month
                </span>
              </p>
              <p className='text-xs leading-5 text-muted-foreground'>
                billed monthly
              </p>
              <ul className='mt-5 gap-2 flex flex-col'>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>AI-powered review, editing, and drafting</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>Advanced research capabilities</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>AI-powered contract automation</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>Web application for CLM</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>White-glove onboarding &amp; support</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-check mr-2 h-4 w-4 text-primary'
                  >
                    <path d='M20 6 9 17l-5-5' />
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <hr className='w-full my-4' />
              <a
                className='inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-white bg-white text-black'
                href='https://calendly.com/swiftlaw/swiftlaw-ai-drafting-assistant-onboarding'
              >
                Book a Call
              </a>
              <p className='mt-6 text-xs leading-5 text-muted-foreground'>
                Tailored for large firms and enterprises
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSection
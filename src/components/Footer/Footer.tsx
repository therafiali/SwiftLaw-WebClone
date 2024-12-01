import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto py-16 sm:px-10 px-5 pb-0'>
        <div className='max-w-6xl mx-auto border-t py-2 grid md:grid-cols-2 h-full justify-between w-full grid-cols-1 gap-1'>
          <span className='text-sm tracking-tight text-foreground'>
            Copyright © {/* */}2024{/* */}{' '}
            <Link className='cursor-pointer' href='/'>
              YourMunshi
            </Link>
            , Inc.
          </span>
          <ul className='flex justify-start md:justify-end text-sm tracking-tight text-foreground'>
            <li className='mr-3 md:mx-4'>
              <a target='_blank' rel='noopener noreferrer' href='/privacy'>
                Privacy Policy
              </a>
            </li>
            <li className='mr-3 md:mx-4'>
              <a target='_blank' rel='noopener noreferrer' href='/terms'>
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

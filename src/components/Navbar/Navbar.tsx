'use client'
// import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from '@nextui-org/navbar'
import Link from 'next/link'
import MyButton from '../shared/MyButton'
import myLogo from '@/assets/Logo/ym_l.png'
import Image from 'next/image'

export default function NavbarApp () {
  // State to toggle the mobile menu
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // // Function to toggle the mobile menu
  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen)
  // }

  // // Function to close the mobile menu
  // const closeMobileMenu = () => {
  //   setIsMobileMenuOpen(false)
  // }

  return (
    <>
      <Navbar
        className='
        fixed top-0 left-0 right-0 z-50  
        backdrop-blur-md bg-white/30 border border-white/40  '
        isBordered
      >
        <div className=' flex justify-between items-center px-8 py-4 
         2xl:max-w-screen-2xl mx-auto w-full'>
          {/* Logo */}
          <NavbarBrand>
            <Image
              src={myLogo}
              alt='YourMunshi'
              width={180}
              height={180}
              className=''
            />
          </NavbarBrand>

          <div className='flex items-end justify-end sm:w-full sm:px-8  sm:space-x-8 '>
            {/* options for large screens */}
            <NavbarContent
              className='hidden sm:flex  gap-4 font-medium'
              justify='end'
            >
              <NavbarItem>
                <Link
                  color='foreground'
                  href='https://payments.yourmunshi.net/'
                >
                  Pricing
                </Link>
              </NavbarItem>
            </NavbarContent>
          </div>

          <div className='flex space-x-4'>
            <NavbarContent justify='end' className='flex'>
              <NavbarItem>
                <MyButton button_text='Login / Signup' />
              </NavbarItem>
            </NavbarContent>
            {/* 
          <div className='sm:hidden flex items-center'>
            <button
              onClick={toggleMobileMenu}
              className='p-2 text-gray-600 hover:text-gray-800 focus:outline-none'
            >
              <span className='block w-6 h-0.5 bg-gray-800 mb-1'></span>
              <span className='block w-6 h-0.5 bg-gray-800 mb-1'></span>
              <span className='block w-6 h-0.5 bg-gray-800'></span>
            </button>
          </div> */}
          </div>
        </div>

        {/* <div
          className={`sm:hidden fixed top-0 left-0 w-full backdrop-blur-sm bg-white/95 border border-sla z-40 
            transform transition-all duration-300 ease-in-out 
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className='relative mt-6'>
   
            <button
              onClick={closeMobileMenu}
              className='absolute top-0 right-5 p-2 text-primary'
            >
              <X />
            </button>

     
            <div className='flex flex-col text-primary items-center space-y-4 py-6 '>
              <NavbarItem>
                <Link href='#'>Pricing</Link>
              </NavbarItem>
            </div>
          </div>
        </div> */}
      </Navbar>
    </>
  )
}

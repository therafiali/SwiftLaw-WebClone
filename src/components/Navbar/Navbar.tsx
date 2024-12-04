'use client'
import { useState } from 'react'
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
import { X } from 'lucide-react'

export default function NavbarApp () {
  // State to toggle the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <Navbar
        className='
        fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 
        backdrop-blur-md bg-white/30 border border-white/40 2xl:max-w-screen-2xl mx-auto'
        isBordered
      >
        {/* Logo */}
        <NavbarBrand>
          <Image src={myLogo} alt='YourMunshi' width={150} height={150} />
        </NavbarBrand>

        <div className='flex items-end justify-end w-full px-8  space-x-8'>
          {/* options for large screens */}
          <NavbarContent
            className='hidden sm:flex  gap-4 font-medium'
            justify='end'
          >
            <NavbarItem>
              <Link color='foreground' href='#'>
                Pricing
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href='/blog' aria-current='page'>
                Blog
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

          <div className='sm:hidden flex items-center'>
            <button
              onClick={toggleMobileMenu}
              className='p-2 text-gray-600 hover:text-gray-800 focus:outline-none'
            >
              <span className='block w-6 h-0.5 bg-gray-800 mb-1'></span>
              <span className='block w-6 h-0.5 bg-gray-800 mb-1'></span>
              <span className='block w-6 h-0.5 bg-gray-800'></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden fixed top-0 left-0 w-full backdrop-blur-sm bg-white/95 border border-sla z-40 
            transform transition-all duration-300 ease-in-out 
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className='relative mt-6'>
            {/* Close Button */}
            <button
              onClick={closeMobileMenu}
              className='absolute top-0 right-5 p-2 text-primary'
            >
              <X />
            </button>

            {/* Mobile Menu Content */}
            <div className='flex flex-col text-primary items-center space-y-4 py-6 '>
              <NavbarItem>
                <Link href='#'>Pricing</Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href='/blog' aria-current='page'>
                  Blog
                </Link>
              </NavbarItem>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  )
}

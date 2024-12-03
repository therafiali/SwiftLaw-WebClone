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
  return (
    <>
      <Navbar
        className='
        fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 
        backdrop-blur-md bg-white/30 border border-white/40 '
        isBordered
      >
        {/* Logo */}
        <NavbarBrand>
          <Image src={myLogo} alt='YourMunshi' width={150} height={150} />
        </NavbarBrand>
        <div className='flex items-center space-x-8 '>
          {/* options  */}
          <NavbarContent
            className='hidden sm:flex gap-4 font-medium'
            justify='center'
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
          {/* Button */}
          <NavbarContent justify='end'>
            <NavbarItem>
              <MyButton button_text='Login/Signup' />
            </NavbarItem>
          </NavbarContent>
        </div>
      </Navbar>
      <hr className='absolute w-full bottom-0 transition-opacity duration-300 ease-in-out opacity-0' />
    </>
  )
}

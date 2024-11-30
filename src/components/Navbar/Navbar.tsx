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
    <Navbar className='flex justify-between px-8 my-4' isBordered>
      {/* Logo */}
      <NavbarBrand>
        <Image src={myLogo} alt='YourMunshi' width={150} height={150} />
      </NavbarBrand>
      <div className='flex  space-x-8'>
        {/* options */}
        <NavbarContent className='hidden sm:flex gap-4 font-medium' justify='center'>
          <NavbarItem>
            <Link color='foreground' href='#'>
              Pricing
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href='#' aria-current='page'>
              Blog
            </Link>
          </NavbarItem>
        </NavbarContent>
        {/* Button */}
        <NavbarContent justify='end'>
          <NavbarItem>
            <MyButton button_text='Start Now' />
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  )
}

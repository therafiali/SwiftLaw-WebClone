import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'
import NavbarApp from '@/components/Navbar/Navbar'

const geistSans = Inter_Tight({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'YourMunshi',
  description: 'Pakistan First AI Legal Assistant | YourMunshi'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://use.typekit.net/rbi5ydc.css' />
      </head>
      <body className={`${geistSans}  antialiased`}>
        <div className='mb-8'>
          <NavbarApp />
        </div>
        {children}
      </body>
    </html>
  )
}

import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex border-t justify-between font-medium p-6 '>
        <div className='flex items-center gap-2'>
          <Link href={'/'}>
          sagenest@cool.io
          </Link>
          </div>
    </footer>
  )
}

export default Footer;
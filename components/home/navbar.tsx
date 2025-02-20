import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 w-full border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className=' containerflex justify-between items-center px-4 py-2'>
          <div className='text-sm font-semibold'>Next.js Blog</div>
          <div className='text-sm'>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
          </div>
        </div>
    </div>
  )
}

export default Navbar
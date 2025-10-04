import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <header className='flex justify-between p-3 h-2/12 w-full bg-red-400'>
      <div className='w-4/5'>
       Logo
      </div>
      <ul className='flex justify-between items-center w-1/5'>
       <li className='p-2'><Link href={"/home"}>Home</Link></li>
       <li className='p-2'><Link href={"/about"}>About</Link></li>
    </ul>
    </header>
  )
}

export default Header
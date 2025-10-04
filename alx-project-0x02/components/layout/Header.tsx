import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 shadow-md text-white">
      <div className="text-xl font-bold text-white">
        <Link href="/">Logo</Link>
      </div>

   
      <nav>
        <ul className="flex space-x-6 text-white font-medium">
          <li className='p-1 cursor-pointer'><Link href="/home">Home</Link></li>
          <li className='p-1 cursor-pointer'><Link href="/about">About</Link></li>
          <li className='p-1 cursor-pointer'><Link href="/posts">Post</Link></li>
          <li className='p-1 cursor-pointer'><Link href="/users">Users</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

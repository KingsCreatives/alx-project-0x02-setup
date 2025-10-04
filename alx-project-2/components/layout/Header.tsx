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
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

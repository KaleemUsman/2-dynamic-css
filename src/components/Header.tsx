
import Link from 'next/link'
import React, { useState } from 'react'
import { FaCar } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import { HiX } from 'react-icons/hi'

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      {/* Logo Section */}
      <h1 className="flex items-center text-2xl font-bold">
        <FaCar className="text-yellow-400 mr-2" style={{ fontSize: '20px' }} />
        KeM Autos
      </h1>

      {/* Navigation Section */}
      <nav className="mt-4 space-x-6">
        <Link href="/" className="hover:text-yellow-400">Home</Link>
        <Link href="/about" className="hover:text-yellow-400">About</Link>
        <Link href="/services" className="hover:text-yellow-400">Services</Link>
        <Link href="/latest" className="hover:text-yellow-400">Latest</Link>
        <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
      </nav>
    </header>
  )
}

export default Header

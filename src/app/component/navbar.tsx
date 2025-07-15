'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <Image src="/img/PingPong.png" className="h-14" alt="PingPong Logo" />
          <span className="text-2xl font-bold text-blue-700 dark:text-white">PingPong</span>
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white dark:bg-gray-900 md:static md:flex md:space-x-8 md:items-center md:w-auto md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 px-4 py-2 md:p-0">
            {[
              { name: 'Home', href: '#', current: true },
              { name: 'About', href: '#' },
              { name: 'Services', href: '#' },
              { name: 'Pricing', href: '#' },
              { name: 'Contact', href: '#' },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`block py-2 px-3 rounded-md text-lg transition-all duration-200 ${
                    item.current
                      ? 'text-white bg-blue-600 md:bg-transparent md:text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

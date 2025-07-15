'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <motion.footer
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 block text-center md:text-left">
          © {new Date().getFullYear()} <Link href="#" className="hover:underline font-semibold text-blue-600 dark:text-blue-400">PingPong</Link>. All rights reserved.
        </span>

        <ul className="flex flex-wrap justify-center md:justify-end mt-4 md:mt-0 text-sm font-medium text-gray-500 dark:text-gray-400 space-x-4">
          <li>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Licensing</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </motion.footer>
  );
}

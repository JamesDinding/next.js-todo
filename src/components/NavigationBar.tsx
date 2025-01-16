import React from 'react';
import Link from 'next/link';

const NavigationBar: React.FC = () => {
  return (
    <nav className='bg-[#1d1e27] border-b-[1px] border-solid border-white'>
      <ul className='text-white flex items-center justify-between px-10 py-4'>
        <li>
          <Link href='/' legacyBehavior>
            <a className='px-4 py-2 text-xl border-solid border-[1px] border-white rounded hover:shadow-[1px_2px_4px_1px_rgba(0,0,0,0.3)] duration-300'>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href='/about' legacyBehavior>
            <a className='px-4 py-2 text-xl border-solid border-[1px] border-white rounded hover:shadow-[1px_2px_4px_1px_rgba(0,0,0,0.3)] duration-300'>
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

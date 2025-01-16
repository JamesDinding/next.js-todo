import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='text-center w-[100px] m-auto p-10'>
      <h1>404 - Page Not Found</h1>
      <Link href='/'>
        <a className='text-[#0070f3] underline'>Go Back Home</a>
      </Link>
    </div>
  );
}

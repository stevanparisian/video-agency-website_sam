import React, { useState } from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between bg-white shadow px-4 py-2">
        <Link href="/" className="text-xl font-bold">VideoAgency</Link>
        <button
          aria-label="Menu"
          className="p-2"
          onClick={() => setOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-md p-4">
            <button
              aria-label="Close menu"
              className="mb-4 p-2"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;

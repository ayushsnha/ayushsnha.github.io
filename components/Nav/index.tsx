'use client';
import { useState } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };


  return (
    <>
      <nav className='md:px-12 px-4 py-6 shadow-nav fixed top-0 z-20 bg-white w-screen'>
        <div className='flex justify-between items-center'>
          <span className='text-2xl font-semibold text-primaryBlack cursor-pointer'>
            Ayush Kumar Sinha
          </span>
          <div className='hidden md:block'>
            <ul className='flex align-center gap-8'>
              <li>
                <a href='#home' className='hover:text-hover text-xl font-medium'>
                  Home
                </a>
              </li>
              <li>
                <a href='#about' className='hover:text-hover text-xl font-medium'>
                  About
                </a>
              </li>
              {/* <li>
                <a href='#projects' className='hover:text-hover text-xl font-medium'>
                  Projects
                </a>
              </li> */}
              <li>
                <a href='#contact' className='hover:text-hover text-xl font-medium'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='md:hidden' onClick={toggleMenu}>
            <div className='flex items-center gap-4'>
              <i className='fa-solid fa-bars-staggered text-2xl font-semibold'></i>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden top-0 h-screen z-30 bg-white w-full right-0 bottom-0 px-12 py-6 text-3xl flex flex-col transition-transform duration-300 ease-in-out fixed`}
      >
        <div className='flex justify-end'>
          <div onClick={(e) => { e.stopPropagation(); toggleMenu() }}>
            <i className='fa-solid fa-xmark'></i>
          </div>
        </div>
        <ul
          onClick={() => setIsOpen(false)}
          className='flex flex-col align-center justify-center gap-8 w-full text-center h-full'>
          <li>
            <a href='#home' className='hover:text-hover text-3xl font-medium'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='hover:text-hover text-3xl font-medium'>
              About
            </a>
          </li>
          {/* <li>
            <a href='#projects' className='hover:text-hover text-3xl font-medium'>
              Projects
            </a>
          </li> */}
          <li>
            <a href='#contact' className='hover:text-hover text-3xl font-medium'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );

}

export default Nav
import React from 'react'

const Nav = () => {
  return (
    <nav className=' px-12 py-6 shadow-nav'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold text-primaryBlack cursor-pointer'>Ayush Kumar Sinha</h1>
        <div>
          <ul className='flex align-center gap-8'>
             <li>
                <a href='#home' className=' hover:text-hover text-lg font-medium'>Home</a>
              </li>
              <li>
                <a href='#about' className=' hover:text-hover text-lg font-medium'>About</a></li>
              <li>
                <a href='#projects' className=' hover:text-hover text-lg font-medium'>Projects</a></li>
              <li>
                <a href='#contact' className=' hover:text-hover text-lg font-medium'>Contact</a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
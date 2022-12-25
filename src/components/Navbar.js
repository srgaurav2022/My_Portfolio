import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    // {
    //   id: 5,
    //   link: 'contact'
    // },
  ]


  return (
    <div className="flex justify-between items-center w-full h-20 bg-black text-white px-5 fixed z-10">
      <div>
        <h1 className='font-logo text-4xl'>Garuav</h1>
      </div>
      <ul className='hidden md:flex' >
        {
          links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer text-gray-400 capitalize hover:scale-110 duration-200'>
              <Link to={link} smooth duration={500}> {link}</Link>
            </li>
          ))
        }
      </ul>
      <div onClick={() => setNav(!nav)} className=' md:hidden cursor-pointer pr-4 z-10 text-gray-400'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (

        <ul className='flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400 md:hidden '>
          {
            links.map(({ id, link }) => (
              <li key={id} className='px-4 capitalize cursor-pointer py-6 text-4xl'>
                <Link onClick={() => setNav(!nav)} to={link} smooth className='mt-[100px]'  duration={500}> {link}</Link>
              </li>
            ))
          }

        </ul>
      )}

    </div>
  )
}

export default Navbar
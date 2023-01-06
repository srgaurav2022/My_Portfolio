import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavbarD = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between px-6 md:px-10 bg-gray-800 text-white uppercase">
      <div>
        <h1 className="text-3xl font-bold ">logo</h1>
      </div>
      <ul className="hidden md:flex space-x-6 capitalize">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer text-gray-400 hover:text-gray-100 active:text-gray-100 transition-all ease-in-out duration-200 hover:scale-110"
          >
            <Link to={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer z-30 text-gray-400 duration-500 transition-all ease-in-out hover:scale-125"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* {nav && ( */}
      <ul
        className={`flex flex-col justify-start items-start  h-full px-24 py-16  fixed top-0 space-y-10 right-0 z-20 md:hidden  backdrop-blur-lg  bg-gray-800 text-white  duration-500 transition-all ease-in-out capitalize ${
          nav ? "-translate-x-0" : "translate-x-[100%]"
        }`}
      >
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 py-2 text-2xl">
            <Link
              onClick={() => setNav(!nav)}
              to={link}
              smooth
              duration={500}
              // className="mt-[100px]"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* )} */}
    </div>
  );
};

export default NavbarD;

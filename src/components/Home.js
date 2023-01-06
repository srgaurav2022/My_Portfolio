import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import pdf from "../assets/portfolio/Gaurav_Resume.pdf";

const Home = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <>
            <FaLinkedin size={30} />
          </>{" "}
          LinkedIn
        </>
      ),
      href: "https://www.linkedin.com/in/gaurav-srivastava-1400a416a",
      // style: "rounded-tr-md"
    },
    {
      id: 2,
      child: (
        <>
          <>
            <FaGithub size={30} />
          </>{" "}
          Github
        </>
      ),
      href: "https://github.com/srgaurav2022",
    },
    {
      id: 3,
      child: (
        <>
          <>
            <HiOutlineMail size={30} />
          </>{" "}
          Mail
        </>
      ),
      href: "mailto:srivastavagauravs2014@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <>
            <BsFillPersonLinesFill size={30} />
          </>
          Resume
        </>
      ),
      href: pdf,
      // style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div
      name="home"
      className=" px-6 md:px-0 h-[170vh] w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center my-5 order-2 md:order-1">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className=" text-gray-500 py-4 max-w-md ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            error reprehenderit obcaecati id sunt, iusto incidunt sint ad eos
            accusantium, soluta minima. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Porro, consequatur unde.
          </p>
          <div className="my-2 items-center">
            <ul className="grid justify-center items-center grid-cols-2 sm:grid-cols-4">
              {links.map(({ id, child, href, style, download }) => (
                <li
                  key={id}
                  className={
                    "flex justify-between items-center h-16 w-20  sm:w-24 m-2 rounded-xl cursor-pointer bg-gray-800 duration-300 hover:scale-105" +
                    " " +
                    style
                  }
                >
                  <a
                    href={href}
                    download={download}
                    className="flex flex-col  justify-around items-center w-full text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-fit rounded-md flex items-center my-2 ">
              <Link to="portfolio" smooth duration={500}>
                {" "}
                Portfolio
              </Link>
            </button>
          </div>
        </div>
        <div className=" order-1 md:order-2 ">
          <img
            src={HeroImage}
            alt="myPicture"
            className="rounded-2xl mx-auto w-3/4 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

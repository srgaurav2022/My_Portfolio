import React from "react";
import image1 from "../assets/portfolio/desktop-design.jpg";
import image2 from "../assets/portfolio/developersFood.png";
import image3 from "../assets/portfolio/easybanking.jpg";
// import image4 from "../assets/portfolio/image4.jpg";
// import image5 from "../assets/portfolio/image5.jpg";
// import image6 from "../assets/portfolio/image6.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: image1,
      href: "https://shimmering-torrone-37a354.netlify.app/",
    },
    {
      id: 2,
      src: image2,
      href: "https://joyful-cuchufli-a70602.netlify.app/",
    },
    {
      id: 3,
      src: image3,
      href: "https://fancy-alpaca-ec5bdc.netlify.app/",
    },
    // {
    //   id: 4,
    //   src: image4,
    //   href: "",
    // },
    // {
    //   id: 5,
    //   src: image5,
    //   href: "",
    // },
    // {
    //   id: 6,
    //   src: image6,
    //   href: "",
    // },
  ];

  return (
    <div
      name="portfolio"
      className="text-white w-full h-full bg-gradient-to-b from-black to-gray-800 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:h-screen  ">
        <div className="pb-8">
          <p className="text-4xl inline font-bold border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out my work right here.</p>
        </div>

        <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, href }) => (
            <div
              key={id}
              className="shadow-md relative shadow-gray-200 rounded-lg"
            >
              <a href={href} target="_blank" rel="noreferrer">
                <img
                  src={src}
                  alt="image1"
                  className="rounded-md w-full duration-200 hover:scale-105 cursor-pointer"
                />
                {/* <div className="absolute top-0 left-0 flex justify-center items-center text-white z-10">
                  <p>Check out</p>
                </div> */}
              </a>
              {/* <div className="flex justify-around items-center my-4">
                <button className="duration-200 bord hover:scale-105">
                  Demo
                </button>
                <button className="duration-200 hover:scale-105">Code</button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-full w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:h-screen">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Gaurav Srivastava. I live in Ambawadi Road Nallasopara
          East. I completed my graduation with B.Sc(IT) in 2020 from Viva
          College Virar West. I looking for a opratunity to work as a Web
          Developer. I have completed some Frontend project by using JavaScript,
          ReactJS, CSS and TailwindCSS. I have the skill to create a fully
          responsive wep pages by using ReactJS and TailwindCSS.
        </p>
        <br />
        <p className="text-xl">
          After creating some projects in Frontend and gaining the confidence in
          Frontend Web Development. Now I am learning backend Web Development
          skill i.e. NodeJS, ExpressJS and MongoDB to become a full-fledged MERN
          Stack Developer.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
// import SocialLinks from "./components/SocialLinks.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio.js";
import Experience from "./components/Experience.js";
// import Contact from "./components/Contact.js";
// import NavbarD from "./NavbarD.js";

const App = () => {
  return (
    <div>
      {/* <NavbarD /> */}
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />

    </div>
  );
};

export default App;

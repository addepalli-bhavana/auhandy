import React from "react";
import logo1 from "../assets/logo-1.png";
import logo2 from "../assets/logo-2.png";
import logo3 from "../assets/logo-3.jpg";
import logo4 from "../assets/logo-4.png";
const Logos = () => {
  return (
    <section className="logos-center section-center ">
      <img src={logo1} alt="logo" />
      <img src={logo2} alt="logo" />
      <img src={logo3} alt="logo" />
      <img src={logo4} alt="logo" />
    </section>
  );
};

export default Logos;

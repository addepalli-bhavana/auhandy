import React from "react";
import person from "../assets/person-1.png";

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <img src={person} alt="person" />
        <article>
          <h2>expert handyman & remodeling</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam a provident, nobis quam dolor tempora voluptates facilis repellat atque!
          </p>
          <div>
            <button type="button" className="btn hero-btn">
              learn more
            </button>
            <button type="button" className="btn hero-btn">
              get a quote
            </button>
          </div>
        </article>
      </div>
      <div className="overlay"></div>
    </header>
  );
};

export default Hero;

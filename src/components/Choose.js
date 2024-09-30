import React from "react";
import twoPersons from "../assets/two-persons.webp";
import Features from "./Features";

const Choose = () => {
  return (
    <section className="section-center choose">
      <div className="choose-img-container">
        <img src={twoPersons} alt="two persons" />
      </div>
      <article>
        <h3 className="choose-heading">why choose us</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          itaque iste at ipsam explicabo maxime corrupti expedita ex, quibusdam,
          placeat
        </p>
        <Features />
      </article>
    </section>
  );
};

export default Choose;

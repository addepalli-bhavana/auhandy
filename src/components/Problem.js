import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import person from "../assets/person-2.png";

const Problem = () => {
  return (
    <section className="problem">
      <div className="section-center problem-center">
        <article>
          <h3>you have some problems in housing?</h3>
          <button type="button" className="btn">
            <FaMobileAlt />
            +1 23 567 8596
          </button>
        </article>
        <img src={person} alt="person image" />
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Problem;

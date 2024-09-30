import React from "react";
import { CiSettings } from "react-icons/ci";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaGift } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Features = () => {
  return (
    <div className="features">
      <article className="feature">
        <span>
          <CiSettings />
        </span>
        <div>
        <h5>easy to customize</h5>
        <p>Lorem ipsum dolor sit ame consectetur adipisicing.</p>
        </div>
      </article>
      <article className="feature">
        <span>
          <BiSolidMessageRounded />
        </span>
        <div>
        <h5>24/7 support service</h5>
        <p>Lorem ipsum dolor sit ame consectetur adipisicing.</p>
        </div>
      </article>
      <article className="feature">
        <span>
          <FaGift />
        </span>
       <div>
       <h5>gift for customers</h5>
       <p>Lorem ipsum dolor sit ame consectetur adipisicing.</p>
       </div>
      </article>
      <article className="feature">
        <span>
          <FaHeart />
        </span>
        <div>
        <h5>favorite customers</h5>
        <p>Lorem ipsum dolor sit ame consectetur adipisicing.</p>
        </div>
      </article>
    </div>
  );
};

export default Features;

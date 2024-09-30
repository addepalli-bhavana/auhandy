import React from "react";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <section className="services">
      <div className="section-center services-center">
        <h3 className="services-heading">our services</h3>
        <div className="services-list">
          {services.map((service) => {
            const { id, icon, title, description } = service;
            return (
              <article className="service" key={id}>
                <span>{icon}</span>
                <h5>{title}</h5>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
        <button type="button" className="btn">
          view all services
        </button>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Services;

import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contact">
      <div className=" section-center contact-center">
        <div>
          <h3 className="map-heading">our location</h3>
          <iframe
            src="https://maps.google.com/maps?q=new%20york&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            frameborder="0"
          ></iframe>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;

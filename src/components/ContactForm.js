import React from "react";

const ContactForm = () => {
  return (
    <div>
      <h3 className="form-heading">get a quote</h3>
      <form className="form">
        <div>
          <input type="text" autoComplete="off" placeholder="Your Name" />
          <input type="email" autoComplete="off" placeholder="Your Email" />
        </div>
        <div>
          <input type="text" autoComplete="off" placeholder="Your Subjects" />
          <input
            type="number"
            autoComplete="off"
            placeholder="Your Phone Number"
          />
        </div>
        <textarea
          cols="25"
          rows="6"
          autoComplete="off"
          placeholder="Description Services Needed"
        ></textarea>
        <button type="button" className="btn form-btn">
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

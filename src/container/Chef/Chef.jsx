import React from "react";
import { SubHeading } from "../../components";
import { RiDoubleQuotesL } from "react-icons/ri";
import "./Chef.css";

const Chef = () => (
  <div className="contact">
    <div className="contact_form_wrapper">
      <SubHeading title="Get In Touch" />
      <h1 className="contact_heading">Contact Us</h1>
      <p className="contact_paragraph">
        <RiDoubleQuotesL style={{ fontSize: "30px", verticalAlign: "middle" }} /> 
        We'd love to hear from you! Fill out your details below and we'll get back to you soon.
      </p>

      <form className="contact_form">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" required />

        <label>Address</label>
        <input type="text" placeholder="Enter your address" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);

export default Chef;

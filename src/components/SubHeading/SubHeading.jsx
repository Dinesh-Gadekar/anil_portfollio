import React from "react";
import { images } from "../../constants";
import "./SubHeading.css"
const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p_class">{title}</p>
    
    {/* <img src={images.email} alt="spoon" className="spoon__img" /> */}
  </div>
);

export default SubHeading;
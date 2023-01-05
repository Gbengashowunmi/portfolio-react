import React from "react";
import { Link } from "react-router-dom";

export default function Project({img, link}) {
  return (
    <div className="project">
      <div className="overlay">
       <Link to={link}> <p>Open project</p>
       </Link>
        </div>
      <img src={img} alt="project" />
      <div className="caption"> <h5>Bank App</h5><p> a website wher you can make financial transaction</p></div>
    </div>
  );
}

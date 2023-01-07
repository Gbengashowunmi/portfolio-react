import React from "react";
import { Link } from "react-router-dom";

export default function Project({img, link, title, description}) {
  return (
    <div className="project">
      <div className="overlay">
       <Link to={link}> <p>Open project</p>
       </Link>
        </div>
      <img src={img} alt="project" />
      <div className="caption"> <h3>{title}</h3><p> {description}</p></div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Project({img, link, title, description, iconSass, iconReact,iconjs,iconNext, icongit, iconCss, iconHtml}) {
  return (
    <div className="project">
      <div className="overlay">
       <Link to={link}> <p>Open project</p>
       </Link>
        </div>
      <img src={img} alt="project" />
      <div className="caption"> <h3>{title}</h3><p> {description}</p></div>
      <div className="tools">  
      {iconHtml && iconHtml}
      {iconCss && iconCss}
      {iconSass && iconSass}
      {iconjs && iconjs}
      {iconReact && iconReact}
      {iconNext && iconNext}
      {icongit && icongit}
      </div>
    </div>
  );
}

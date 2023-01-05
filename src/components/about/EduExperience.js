import React from "react";
import { IoBriefcaseSharp } from "react-icons/io5";

export default function EduExperience({details, date, company}) {
  return (
    <div className="edu-ex-container">
      <div className="icons">
      <IoBriefcaseSharp className="react_icon" />
      </div>
      <div className="details">
        <div className="header"><p>{date}</p></div>
        <h3>
          Frontend Web Developer - <span>{company}</span>
        </h3>
        <p>
{details}
        </p>
      </div>
    </div>
  );
}

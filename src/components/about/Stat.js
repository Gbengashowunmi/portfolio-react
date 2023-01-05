import React from "react";

export default function Stat({content, figure}) {
  return (
    <div className="stat">
      <h3>{figure}</h3>
      <p>{content}</p>
    </div>
  );
}

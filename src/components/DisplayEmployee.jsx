import React from "react";

function DisplayEmployee({ simpson }) {
  return (
    <div className="DisplayEmployee">
      <img src={simpson.image} />
      <p>{simpson.quote}</p>
    </div>
  );
}

export default DisplayEmployee;

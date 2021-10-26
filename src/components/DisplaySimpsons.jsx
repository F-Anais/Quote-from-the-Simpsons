import React from "react";

function DisplaySimpsons({ simpsons }) {
  return (
    simpsons && (
      <div className="DisplaySimpsons">
        <img src={simpsons.image} alt={simpsons.character} />

        <ul>
          <li>
            Name: {simpsons.character}
          </li>
          <li>
            Quote: {simpsons.quote}
          </li>
        </ul>
      </div>
    )
  );
}

export default DisplaySimpsons;

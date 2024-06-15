import React from "react";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const Guess = ({ value, answer }) => {
  const charArray = value ? checkGuess(value, answer) : "";
  return (
    <p className="guess">
      {range(NUM_OF_LETTERS_ALLOWED).map((index) => (
        <span
          key={index}
          className={`cell ${value ? charArray[index]["status"] : ""}`}
        >
          {value ? charArray[index]["letter"] : ""}
        </span>
      ))}
    </p>
  );
};

export default Guess;

import React from "react";
import { checkGuess } from "../../game-helpers";

const Keyboard = ({ guesses, answer }) => {
  const keyboardRows = {
    "first-row": "qwertyuiop",
    "second-row": "asdfghjkl",
    "third-row": "zxcvbnm",
  };

  // Filter and process user guesses
  const userGuesses = guesses
    .filter((guess) => guess.value !== "")
    .map((guess) => guess.value);
  const guessResults = userGuesses.map((guess) => checkGuess(guess, answer));

  const charStatusMap = {};
  guessResults.forEach((result) => {
    result.forEach(
      ({ letter, status }) => (charStatusMap[letter.toLowerCase()] = status)
    );
  });

  const renderChar = (char) => {
    const result = charStatusMap[char];
    return (
      <span key={char} className={`keyboard-cell ${result || ""}`}>
        {char}
      </span>
    );
  };

  return (
    <div className="keyboard">
      {Object.entries(keyboardRows).map(([row, value]) => (
        <div className="keyboard-row" key={row}>
          {value.split("").map((char) => renderChar(char))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;

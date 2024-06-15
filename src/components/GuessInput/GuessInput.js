import React from "react";
import {
  NUM_OF_GUESSES_ALLOWED,
  NUM_OF_LETTERS_ALLOWED,
} from "../../constants";

const GuessInput = ({ input, numOfGuesses, winStatus }) => {
  const [guess, setGuess] = React.useState("");

  const submitGuess = (event) => {
    if (numOfGuesses >= NUM_OF_GUESSES_ALLOWED) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    input(guess.toUpperCase());
    setGuess("");
  };
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={submitGuess}>
        <label className="guess-input">Enter guess:</label>
        <input
          required
          disabled={
            numOfGuesses === NUM_OF_GUESSES_ALLOWED - 1 || winStatus
              ? true
              : false
          }
          id="guess-input"
          type="text"
          style={{
            pointerEvents: numOfGuesses < 5 && !winStatus ? "auto" : "none",
          }}
          value={guess}
          title={`Please enter only ${NUM_OF_LETTERS_ALLOWED} letters`}
          pattern={`[A-Za-z]{${NUM_OF_LETTERS_ALLOWED}}`}
          onChange={(event) => setGuess(event.target.value)}
        />
      </form>
    </div>
  );
};

export default GuessInput;

import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const GameOverBanner = ({
  numOfGuesses,
  winStatus,
  answer,
  resetGuesses,
  setGuesses,
}) => {
  const hasLost = numOfGuesses >= NUM_OF_GUESSES_ALLOWED - 1 && !winStatus;

  const resetGame = () => {
    const emptyGuesses = setGuesses(() => resetGuesses());
    return emptyGuesses;
  };

  return (
    <>
      {winStatus && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{numOfGuesses} guesses</strong>.
          </p>
          <button className="reset-btn" onClick={resetGame}>
            Reset Game
          </button>
        </div>
      )}
      {hasLost && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button className="reset-btn" onClick={resetGame}>
            Reset Game
          </button>
        </div>
      )}
    </>
  );
};

export default GameOverBanner;

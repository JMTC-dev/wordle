import React from "react";
import { range } from "../../utils";
import Guess from "../Guess";
import GameOverBanner from "../GameOverBanner";
const GuessResults = ({
  numOfGuesses,
  winStatus,
  guesses,
  answer,
  resetGuesses,
  setGuesses,
}) => {
  return (
    <>
      <GameOverBanner
        numOfGuesses={numOfGuesses}
        winStatus={winStatus}
        guesses={guesses}
        answer={answer}
        resetGuesses={resetGuesses}
        setGuesses={setGuesses}
      />
      <div className="guess-results">
        {guesses.map(({ key, value }) => (
          <Guess key={key} value={value} answer={answer} />
        ))}
      </div>
    </>
  );
};

export default GuessResults;

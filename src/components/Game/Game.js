import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Keyboard from "../Keyboard";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.
let answer = "";
function Game() {
  const [winStatus, setWinStatus] = React.useState(false);
  const [currentGuessIndex, setCurrentGuessIndex] = React.useState(0);

  const generateGuesses = () => {
    setCurrentGuessIndex(0);
    answer = sample(WORDS);
    console.info("answer:", answer);
    setWinStatus(false);
    const generateGuesses = range(NUM_OF_GUESSES_ALLOWED - 1).map(() => ({
      key: crypto.randomUUID(),
      value: "",
    }));

    return generateGuesses;
  };

  const [guesses, setGuesses] = React.useState(() => generateGuesses());

  const addGuess = (input) => {
    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];
      newGuesses[currentGuessIndex] = {
        ...newGuesses[currentGuessIndex],
        value: input,
      };

      if (input === answer) {
        setWinStatus(true);
      }

      setCurrentGuessIndex((prevIndex) => prevIndex + 1);
      return newGuesses;
    });
  };

  return (
    <>
      <GuessResults
        numOfGuesses={currentGuessIndex}
        guesses={guesses}
        answer={answer}
        winStatus={winStatus}
        resetGuesses={generateGuesses}
        setGuesses={setGuesses}
      />
      <Keyboard guesses={guesses} answer={answer} />
      <GuessInput
        input={addGuess}
        numOfGuesses={currentGuessIndex}
        winStatus={winStatus}
      />
    </>
  );
}

export default Game;

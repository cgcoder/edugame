import React from "react";
import "./App.css";
import { LetterGrid } from "./components/LetterGrid";
import { DisplayWord } from "./components/DisplayWord";

function App() {
  const [word, setWord] = React.useState("");

  const handleClick = React.useCallback(
    (index) => {
      setWord(`${word.substring(0, index)}${word.substring(index + 1)}`);
    },
    [word, setWord]
  );

  const keyboardClick = React.useCallback(
    (c: string) => {
      if (c === "clear") {
        setWord("");
        return;
      }

      setWord(`${word}${c}`);
    },
    [word, setWord]
  );

  return (
    <div>
      <DisplayWord display={word} handleClick={handleClick} />
      <div style={{ height: "20px" }} />
      <LetterGrid onClick={keyboardClick} />
    </div>
  );
}

export default App;

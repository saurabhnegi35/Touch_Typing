import React from "react";
import "./Input.css";
import { useState } from "react";
import { useEffect } from "react";
import Click from "../media/click.wav";
import Error from "../media/error.wav";

const Input = (props) => {
  console.log(props.displayWord);
  const [word, setWord] = useState("");
  const [isTrue, setIsTrue] = useState("");
  console.log(isTrue);
  let inputBackgroundColor;

  function click() {
    new Audio(Click).play();
  }

  function error() {
    new Audio(Error).play();
  }

  // console.log("Word Length", word.length);
  // console.log("Word Length", word[word.length - 1]);
  // console.log("Display Word length ", props.displayWord[word.length - 1]);
  // console.log(word[word.length - 1] === props.displayWord[word.length - 1]);

  // useEffect(() => {
  //   if (word[word.length - 1] === props.displayWord[word.length - 1]) {
  //     setIsTrue("true");
  //   } else {
  //     setIsTrue("false");
  //   }
  // }, [word, props.displayWord]);
  // console.log(props.displayWord.slice(0, word.length) === word);

  useEffect(() => {
    if (props.displayWord.slice(0, word.length) === word) {
      setIsTrue("true");
      click();
    } else {
      setIsTrue("false");
      error();
    }
  }, [word, props.displayWord]);

  if (isTrue !== "true") {
    inputBackgroundColor = "#FF6969";
  }
  let styles = {
    backgroundColor: inputBackgroundColor,
  };

  // const keys = "asdfghjkl";
  // const wordLengths = [2, 3, 4];
  // const combinations = [];

  // for (let i = 0; i < wordLengths.length; i++) {
  //   const wordLength = wordLengths[i];

  //   for (let j = 0; j < keys.length; j++) {
  //     const startChar = keys[j];

  //     generateCombinations(startChar, wordLength, "");
  //   }
  // }

  // function generateCombinations(currentChar, wordLength, currentWord) {
  //   currentWord += currentChar;

  //   if (currentWord.length === wordLength) {
  //     combinations.push(currentWord);
  //     return;
  //   }

  //   const currentIndex = keys.indexOf(currentChar);

  //   for (let k = currentIndex + 1; k < keys.length; k++) {
  //     const nextChar = keys[k];

  //     generateCombinations(nextChar, wordLength, currentWord);
  //   }
  // }

  // console.log(combinations);

  return (
    <>
      <input
        type="text"
        className="input-bar"
        placeholder="Type the Upper Text Here"
        style={styles}
        onChange={(e) => {
          setWord(e.target.value);
          // console.log(searchText);
        }}
      />
    </>
  );
};

export default Input;

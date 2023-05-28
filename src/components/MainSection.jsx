import React, { useEffect, useState } from "react";
import "./MainSection.css";
import Input from "./Input";
import { setMatched } from "../reducers/Action";
import { Ingram } from "./constants";
import { connect } from "react-redux";

const MainSection = ({ isMatched, setMatched, isPaused }) => {
  const [displayWord, setDisplayWord] = useState("as ak as ak as ak");
  const randomWords = [];

  function getRandomWords(array, count) {
    while (randomWords.length < count) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const randomWord = array[randomIndex];

      if (!randomWords.includes(randomWord)) {
        randomWords.push(randomWord);
      }
    }

    return randomWords;
  }

  function generateSixWordString(selectedWords) {
    const sixWordString = [
      ...selectedWords,
      ...selectedWords,
      ...selectedWords,
    ].join(" ");

    return sixWordString;
  }

  // const selectedWords = getRandomWords(Ingram, 2);
  //  setDisplayWord = "ak as ak as ak as";

  if (isMatched) {
    setTimeout(() => {
      const selectedWords = getRandomWords(Ingram, 2);
      setDisplayWord(generateSixWordString(selectedWords));
      setMatched(false);
    }, 1000);
  }

  // const displayWord = "ac ba ac ba ac ba";
  return (
    <div className="main-section">
      <div className="expected-phrase">{displayWord}</div>
      <Input displayWord={displayWord} setMatched={setMatched} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isMatched: state.isMatched,
  };
};

const mapDispatchToProps = {
  setMatched,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);

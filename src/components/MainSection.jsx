import React from "react";
import "./MainSection.css";
import Input from "./Input";
import { Ingram } from "./constants";

const MainSection = () => {
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

  const selectedWords = getRandomWords(Ingram, 2);
  const displayWord = generateSixWordString(selectedWords);

  // const displayWord = "ac ba ac ba ac ba";
  return (
    <div className="main-section">
      <div className="expected-phrase">
        <p>{displayWord}</p>
      </div>
      <Input displayWord={displayWord} />
    </div>
  );
};

export default MainSection;

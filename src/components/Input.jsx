import React from "react";
import "./Input.css";
import { connect } from "react-redux";
import { setKeyPressed, setTimerPaused, setMatched } from "../reducers/Action";
import { useState, useEffect } from "react";
import Click from "../media/click.wav";
import Error from "../media/error.wav";
import Yay from "../media/yay.wav";

const Input = ({
  displayWord,
  setKeyPressed,
  isKeyPressed,
  setTimerPaused,
  setMatched,
}) => {
  const [word, setWord] = useState("");
  const [isTrue, setIsTrue] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [play, setPlay] = useState("false");
  const [errorCount, setErrorCount] = useState(0);
  const [totalWordCount, setTotalWordCount] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  useEffect(() => {
    setPlay("true");
  }, [displayWord]);

  let inputBackgroundColor;

  const handleKeyDown = () => {
    if (!isKeyPressed) {
      setKeyPressed(true);
      setTimerPaused(false);
    } else {
      setTotalWordCount((prevCount) => prevCount + 1);
    }
  };

  function click() {
    if (play === "true") {
      new Audio(Click).play();
    }
  }

  function error() {
    new Audio(Error).play();
    setErrorCount((prevCount) => prevCount + 1);
  }

  function yay() {
    if (play === "true") {
      new Audio(Yay).play();
    }
  }

  useEffect(() => {
    if (displayWord.slice(0, word.length) === word) {
      setIsTrue("true");
      click();
    } else {
      setIsTrue("false");
      error();
    }
  }, [word, displayWord]);

  useEffect(() => {
    if (displayWord.length === word.length && displayWord === word) {
      setIsTrue("true");
      setMatched(true);
      setIsCompleted(true);
      setTimerPaused(true);
      setTimeout(() => {
        setWord("");
        setIsCompleted(false);
        setKeyPressed(false);
      }, 1000);
      yay();
    }
  }, [word, displayWord, setTimerPaused, setMatched]);

  if (isTrue !== "true") {
    inputBackgroundColor = "#FF6969";
  }

  let styles = {
    backgroundColor: inputBackgroundColor,
  };

  useEffect(() => {
    const newAccuracy =
      totalWordCount > 0 ? (1 - errorCount / totalWordCount) * 100 : 100;
    setAccuracy(newAccuracy);
  }, [errorCount, totalWordCount]);

  return (
    <>
      <input
        type="text"
        className="input-bar"
        placeholder="Type the Upper Text Here"
        style={styles}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setWord(e.target.value);
        }}
        disabled={isCompleted}
        value={word}
      />
      <div className="accuracy">
        <p>Error Count: {errorCount}</p>
        <p>Accuracy: {accuracy.toFixed(2)}%</p>
        <p>Total Characters Typed: {totalWordCount}</p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isKeyPressed: state.isKeyPressed,
  };
};

const mapDispatchToProps = {
  setKeyPressed,
  setTimerPaused,
  setMatched,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);

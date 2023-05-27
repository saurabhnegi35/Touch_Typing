import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setKeyPressed } from "../reducers/Action";

const Timer = ({ isKeyPressed, setKeyPressed }) => {
  const [seconds, setSeconds] = useState(300); // 5 minutes

  useEffect(() => {
    let interval = null;

    if (isKeyPressed) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isKeyPressed]);

  useEffect(() => {
    if (seconds === 0) {
      // Timer finished, handle completion logic here
    }
  }, [seconds]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="Timer">
      <h2>Time Remaining:</h2>
      <p>{formatTime(seconds)}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isKeyPressed: state.isKeyPressed,
  };
};

const mapDispatchToProps = {
  setKeyPressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

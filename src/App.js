/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./styles.css";
import Lightbulb from "./Lightbulb";
import Instructions from "./Instructions";

const App = () => {
  const [isOn, setIsOn] = useState(false);
  const [count, setCounter] = useState(0);
  const [isblock, setBlock] = useState("block");
  const [timerId, setTimerId] = useState();

  function handleClick() {
    if (timerId && !isOn) {
      // Note: clearTimeout returns undefined
      setTimerId(clearTimeout(timerId));
    }

    if (isOn) {
      setCounter(count + 1);
      setBlock("block");
      setIsOn(false);
    } else {
      setBlock("block night");
      setIsOn(true);
      setTimerId(
        setTimeout(() => {
          setIsOn(false);
          setBlock("block");
          setTimerId(null);
        }, 5000)
      );
    }
  }

  return (
    <>
      <Instructions />
      <div className={isblock}>
        <a onClick={handleClick}>{isOn ? "turn me off" : "turn me on"}</a>
        <div className="container"></div>
        {count > 10 ? (
          <h1 className="no-light">
            You have used your daily electricity allowance, you should better
            light a candle.
          </h1>
        ) : (
          <Lightbulb />
        )}
      </div>
    </>
  );
};

export default App;

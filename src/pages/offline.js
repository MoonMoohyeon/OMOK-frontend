import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import "../styles/offline.css";

const ChessClock = () => {
  const [whiteTime, setWhiteTime] = useState(600);
  const [blackTime, setBlackTime] = useState(600);
  const isBlackTurn = useSelector((state) => state.turn.isBlack);
  const dispatch = useDispatch();
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isBlackTurn) {
        setWhiteTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
      } else {
        setBlackTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
      }
      console.log("state: ", isBlackTurn);
    }, 1000);

    setTimerInterval(timer);

    return () => clearInterval(timer);
  }, [isBlackTurn]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleTurnChange = () => {
    dispatch({ type: "changeTurn" });
  };

  return (
    <div>
      <hr></hr>
      <hr></hr>
      <div>White: {formatTime(whiteTime)}</div>
      <div>Black: {formatTime(blackTime)}</div>
      <button onClick={handleTurnChange}>Change Turn</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isBlackTurn: state.isBlackTurn,
});

export default connect(mapStateToProps)(ChessClock);
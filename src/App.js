import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import GomokuBoard from "./components/GomokuBoard.tsx";
import Main from "./pages/main.js";
import Game from "./pages/game.js";
import Tab from "./pages/friend.js";
import Rank from "./pages/rank.js";
import Profile from "./pages/profile.js";
import NavigationBar from "./NavigationBar.js";
import StatusBar from "./StatusBar.js";
import "./App.css";

function App() {
  const [showMain, setShowMain] = useState(true);
  const handleButtonClick = () => {
    setShowMain(!showMain);
  };

  if (showMain) {
    return <Main onButtonClick={handleButtonClick} />;
  } else {
    return (
      <div className="App">
        <div className="screen">
          <StatusBar />
          <NavigationBar />
          <Routes>
            <Route path="/game" element={<Game />} />
            <Route path="/friend" element={<Tab />} />
            <Route path="/rank" element={<Rank />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/game/offline" element={<GomokuBoard />} />
            <Route path="/*" element={"Not Found"} />
          </Routes>
        </div>
      </div>
    );
  }
}

/*
  //반응형 함수(?) 일단은 안씀
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  */

export default App;

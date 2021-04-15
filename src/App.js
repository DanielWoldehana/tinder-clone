import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards";
import SwipeButton from "./components/SwipeButtons/SwipeButtons";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButton />
    </div>
  );
}

export default App;

import React from "react";
import Game from "./components/Game";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <h1>Tic-Tac-Toe ReactJS</h1>
          </div>
        </div>
        <div className="row">
          <Game />
        </div>
      </div>
    </>
  )
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GameProvide from "./context/GameProvider";
import TeamProvide from "./context/TeamProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameProvide>
      <TeamProvide>
        <App />
      </TeamProvide>
    </GameProvide>
  </React.StrictMode>
);

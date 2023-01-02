import { useContext, useEffect } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { GameContext } from "./context/GameProvider";
import { TeamContext } from "./context/TeamProvider";

function App() {
  const { setAllGame } = useContext(GameContext);
  const { setTeamData } = useContext(TeamContext);
  useEffect(() => {
    // load team data
    fetch("https://www.balldontlie.io/api/v1/teams")
      .then((res) => res.json())
      .then((res) => {
        setTeamData(res.data);
      });
      // load game data
      fetch("https://www.balldontlie.io/api/v1/games")
      .then((res) => res.json())
      .then((res) => {
        setAllGame(res.data);
      });
  },[]);
  return (
    <div className="container App pt-4">
      <Dashboard />
    </div>
  );
}

export default App;

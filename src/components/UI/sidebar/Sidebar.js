import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../../../context/GameProvider";
import Backdrop from "../Backdrop";
import "./Sidebar.css";

function Sidebar(props) {
  const { getRandomGame } = useContext(GameContext);
  const gameData = getRandomGame(props.team.id);
  const [games, setGames] = useState(0);
  useEffect(() => {
    fetch(
      `https://www.balldontlie.io/api/v1/games?seasons[]=${[
        2021,
      ]}&team_ids[]=${[props.team.id]}`
    )
      .then((res) => res.json())
      .then((res) => {
        setGames(res.data.length);
      });
  }, []);

  return (
    <Backdrop>
      <div className="row m-auto h-100 d-flex justify-content-end" data-cy="side">
        <div className="col col-sm-6 col-md-4 col-xl-4 p-0 bg-light ">
          {/* header  */}
          <div
            className="row m-auto p-2 w-100 header d-flex align-items-center justify-content-between"
            style={{ backgroundColor: "#d7dfe5" }}
          >
            <h4 data-cy="side-header" className="m-2 ml-3">{props.team.name}</h4>
            <button
              className="border-0 d-flex align-items-center"
              data-cy="side-close"
              style={{ backgroundColor: "inherit" }}
              onClick={props.close}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          {/* details */}
          <div className="p-3">
            <table className="w-auto p-2 text-left">
              <tbody>
                <tr>
                  <td>Team Full Name</td>
                  <td>{props.team.full_name}</td>
                </tr>
                <tr>
                  <td>Total Game in 2021</td>
                  <td>{games}</td>
                </tr>
                <tr>
                  <td>
                    <b>Random Game Details: </b>
                  </td>
                </tr>
                <tr className="font-weight-bold">
                  <td className="sb">Date</td>
                  <td>{gameData.date.substring(0, 10)}</td>
                </tr>
                <tr className="font-weight-bold">
                  <td className="sb">Home Team</td>
                  <td>{gameData.home_team.name}</td>
                </tr>
                <tr className="font-weight-bold">
                  <td className="sb">Home Team Score</td>
                  <td>{gameData.home_team_score}</td>
                </tr>
                <tr className="font-weight-bold">
                  <td className="sb">Visitor Team</td>
                  <td>{gameData.visitor_team.name}</td>
                </tr>
                <tr className="font-weight-bold">
                  <td className="sb">Visitor Team Score</td>
                  <td>{gameData.visitor_team_score}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Backdrop>
  );
}

export default Sidebar;

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
        console.log(res.data);
        setGames(res.data.length);
      });
  }, []);

  return (
    <Backdrop click={props.close}>
      <div className="row m-auto h-100 d-flex justify-content-end">
        <div className="col col-sm-6 col-md-4 col-xl-3 p-0 bg-light ">
          {/* header  */}
          <div
            className="row m-auto pl-2 pr-3 w-100 header d-flex align-items-center justify-content-between"
            style={{ backgroundColor: "#d7dfe5" }}
          >
            <h2>{props.team.name}</h2>
            <button
              className="border-0 d-flex align-items-center"
              style={{ backgroundColor: "inherit" }}
              onClick={props.close}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          {/* details */}
          <div className="p-3">
            <table className="w-100 text-left">
              <tr>
                <td>Team Full Name:</td>
                <td>{props.team.full_name}</td>
              </tr>
              <tr>
                <td>Total Game in 2021:</td>
                <td>{games}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <b>Random Game Details:</b>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="pl-3 pt-3">
                  <b>
                    <table className=" w-100">
                      <tr>
                        <td>Date:</td>
                        <td>{gameData.data}</td>
                      </tr>
                      <tr>
                        <td>Home Team:</td>
                        <td>{gameData.home_team.name}</td>
                      </tr>
                      <tr>
                        <td>Home Team Score:</td>
                        <td>{gameData.home_team_score}</td>
                      </tr>
                      <tr>
                        <td>Visitor Team:</td>
                        <td>{gameData.visitor_team.name}</td>
                      </tr>
                      <tr>
                        <td>Visitor Team Score:</td>
                        <td>{gameData.visitor_team_score}</td>
                      </tr>
                    </table>
                  </b>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </Backdrop>
  );
}

export default Sidebar;

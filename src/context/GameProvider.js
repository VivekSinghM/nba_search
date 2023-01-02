import { createContext, useState } from "react";

export const GameContext = createContext();
const GameProvide = (props) => {
  const [allGame, setAllGame] = useState();
  const getTotalGame=(team_id)=>{
    // filter for team
    return allGame.filter((game) => {
      return game.home_team.id === team_id || game.visitor_team.id === team_id;
    });
  }
  const getRandomGame = (team_id) => {
    const temp = getTotalGame(team_id);
    // return random game
    return temp[Math.floor(Math.random() * temp.length)]
  };
 
  return (
    <GameContext.Provider value={{ getRandomGame, setAllGame }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvide;

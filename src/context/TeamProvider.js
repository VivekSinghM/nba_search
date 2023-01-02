import { createContext, useState } from "react";

export const TeamContext = createContext();
const TeamProvide = (props) => {
  const [allTeam, setAllTeam] = useState();
  const [totalTeams, setTotalTeams] = useState();
  const setTeamData = (data) => {
    setAllTeam(data);
    setTotalTeams(data.length);
  };
  return (
    <TeamContext.Provider value={{ allTeam, totalTeams, setTeamData }}>
      {props.children}
    </TeamContext.Provider>
  );
};

export default TeamProvide;

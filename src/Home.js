import React, { useRef } from "react";
import Overview from "./overview";
import FreeLatest from "./free-latest";
import StandingsIntro from "./standings-intro";
import HighlightsIntro from "./highlight-intro";
import MatchesIntro from "./matches-intro";
import TeamsIntro from "./teams-intro";

const HomePage = () => {
  const toStandings = useRef();
  const toHighlights = useRef();
  const toSchedule = useRef();
  const toTeams = useRef();
  const scrollToDiv = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <>
      <div className="body">
        <Overview
          click={() => scrollToDiv(toStandings)}
          click2={() => scrollToDiv(toHighlights)}
          click3={() => scrollToDiv(toSchedule)}
          click4={() => scrollToDiv(toTeams)}
        />
        <FreeLatest />
        <StandingsIntro reference={toStandings} />
        <HighlightsIntro reference={toHighlights} />
        <MatchesIntro reference={toSchedule} />
        <TeamsIntro reference={toTeams} />
      </div>
    </>
  );
};

export default HomePage;

import React, { useState, useEffect } from "react";
import useFetch3 from "./useFetch3";
import NavBar from "./navBar";
import {
  Container,
  Col,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import leagues from "./standings-leagues";
import MatchesMatchdays from "./matches-matchdays";

const Matches = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [matchday, setMatchday] = useState(0);
  const [league, setLeague] = useState({
    leagueName: "Premier League",
    leagueCode: "PL",
  });
  const [currMatches, setCurrMatches] = useState([]);
  const [url, setUrl] = useState(
    `https://api.football-data.org/v2/competitions/${league.leagueCode}/matches`
  );

  const [isLoading, data] = useFetch3(url);

  useEffect(() => {
    if (!isLoading) {
      var temp = data[data.length - 1].matchday;
      setMatchday(temp);
      const filtered_data = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].matchday === temp) filtered_data.push(data[i]);
      }
      console.log(filtered_data);
      setCurrMatches(filtered_data);
    }
  }, [isLoading, data]);

  const changeMatchday = (matchday) => {
    setMatchday(matchday);
    const filtered_data = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].matchday === matchday) filtered_data.push(data[i]);
    }
    setCurrMatches(filtered_data);
    //console.log(filtered_data);
  };

  const setActive = (code, name) => {
    if (code !== league.leagueCode) {
      setLeague({ ...league, leagueCode: code, leagueName: name });
      setUrl(`https://api.football-data.org/v2/competitions/${code}/matches`);
    }
  };

  if (isLoading || currMatches.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <article>
        <header className="intro">
          <NavBar />
        </header>
        <div className="standings-panel">
          <div className="media-center">
            <h1 className="standings-title">
              <span
                style={{
                  borderBottom: "4px ridge white",
                  borderColor: "blue",
                  padding: "0 20px",
                  paddingBottom: "20px",
                }}
              >
                Schedule
              </span>
            </h1>
            <h4>
              Keep up to data with upcoming matches in you favourite leagues and
              never miss out on what you love.
            </h4>
            <h4>
              Filter the schedule according to the league and the matchday.
            </h4>
            <Container style={{ textAlign: "center" }}>
              <Row>
                <Col lg="6" md="12">
                  <p className="standings-options">League</p>
                  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret className="league-dropdown">
                      {league.leagueName}
                    </DropdownToggle>
                    <DropdownMenu>
                      {Object.keys(leagues).map((code) => {
                        return (
                          <DropdownItem
                            key={code}
                            onClick={() => setActive(code, leagues[code])}
                          >
                            {leagues[code]}
                          </DropdownItem>
                        );
                      })}
                    </DropdownMenu>
                  </Dropdown>
                </Col>
                <Col lg="6" md="12">
                  <p className="standings-options">Matchday</p>
                  <MatchesMatchdays
                    total={data[data.length - 1].matchday}
                    click={changeMatchday}
                  />
                </Col>
              </Row>
            </Container>
            <div className="standings-card-heading">
              <div className="standings-box">
                <h1
                  style={{
                    fontWeight: "bold",
                    marginBottom: "0",
                  }}
                >
                  {league.leagueName}{" "}
                </h1>
                <hr
                  style={{
                    backgroundColor: "rgb(20, 45, 158)",
                    width: "80%",
                    opacity: "1",
                    height: "4px",
                    margin: "0 0",
                  }}
                />
                <span style={{ fontSize: "20px" }}>
                  Season {currMatches[0].season.startDate.substring(2, 4)}/
                  {currMatches[0].season.endDate.substring(2, 4)}
                </span>
                <br />
                <span style={{ fontSize: "20px" }}>Matchday {matchday}</span>
                <br />
              </div>
              <Container>
                {currMatches.map((match) => {
                  return (
                    <div key={match.homeTeam.name}>
                      <Row style={{ padding: "20px 0" }}>
                        <Col sm="12" style={{ fontSize: "30px" }}>
                          <span className="team-name">
                            {match.homeTeam.name}
                          </span>
                          <span>-</span>
                          <span className="team-name">
                            {match.awayTeam.name}
                          </span>
                        </Col>
                        <Col sm="12" style={{ fontSize: "20px" }}>
                          <span
                            style={{
                              backgroundColor: "grey",
                              padding: "0 5px",
                            }}
                          >
                            {match.score.fullTime.homeTeam} -{" "}
                            {match.score.fullTime.awayTeam}
                          </span>
                        </Col>
                        <Col sm="12" style={{ fontSize: "20px" }}>
                          <div>{match.utcDate.substring(0, 10)}</div>
                          <div>{match.utcDate.substring(11, 16)}</div>
                        </Col>
                      </Row>
                      <hr
                        style={{
                          border: "ridge darkblue 1px",
                          margin: "0 10%",
                        }}
                      />
                    </div>
                  );
                })}
              </Container>
            </div>
          </div>
        </div>
      </article>
    );
  }
};

export default Matches;

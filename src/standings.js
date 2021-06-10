import React, { useState, useEffect } from "react";
import useFetch2 from "./useFetch2";
import {
  Container,
  Col,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonGroup,
  Button,
} from "reactstrap";
import NavBar from "./navBar";
import leagues from "./standings-leagues";
import RenderStandings from "./standings-render-cards.js";

const Standings = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [currLeague, setCurrLeague] = useState([]);
  // const [data, setData] = useState([]);

  const [league, setLeague] = useState({
    leagueName: "Premier League",
    leagueCode: "PL",
  });

  const [filter, setFilter] = useState({
    filterCode: "TOTAL",
    filterName: "Overall",
  });

  const [url, setUrl] = useState(
    `https://api.football-data.org/v2/competitions/${league.leagueCode}/standings`
  );

  const [standings, overall, home, away] = useFetch2(url);

  useEffect(() => {
    //setData(standings);
    if (filter.filterName === "Overall") setCurrLeague(overall);
    else if (filter.filterName === "Home") setCurrLeague(home);
    else if (filter.filterName === "Away") setCurrLeague(away);
  });

  const setActive = (code, name) => {
    if (code !== league.leagueCode) {
      setLeague({ ...league, leagueCode: code, leagueName: name });
      setUrl(`https://api.football-data.org/v2/competitions/${code}/standings`);
    }
  };

  const changeFilter = (code, name) => {
    setFilter({ ...filter, filterCode: code, filterName: name });
    if (name === "Overall") setCurrLeague(overall);
    else if (name === "Home") setCurrLeague(home);
    else if (name === "Away") setCurrLeague(away);
  };

  if (standings.length === 0) {
    return <div style={{ fontSize: "30px" }}>Loading</div>;
  } else
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
                Standings
              </span>
            </h1>
            <h4>
              Select the league and filter to get standings for some of the best
              leagues in the world
            </h4>
            <Container style={{ textAlign: "center" }}>
              <Row>
                <Col md="6">
                  <p className="standings-options">League</p>
                  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>{league.leagueName}</DropdownToggle>
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
                <Col md="6">
                  <p className="standings-options">
                    Filter: {filter.filterName}
                  </p>
                  <ButtonGroup>
                    <Button onClick={() => changeFilter("TOTAL", "Overall")}>
                      Overall
                    </Button>
                    <Button onClick={() => changeFilter("HOME", "Home")}>
                      Home
                    </Button>
                    <Button onClick={() => changeFilter("AWAY", "Away")}>
                      Away
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Container>

            <Container fluid style={{ textAlign: "center" }}>
              <Row>
                <Col>
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
                        {filter.filterName} Season{" "}
                        {standings.season.startDate.substring(2, 4)}/
                        {standings.season.endDate.substring(2, 4)}
                      </span>
                      <br />
                      <span style={{ fontSize: "20px" }}>
                        {standings.competition.area.name}
                      </span>
                    </div>
                    <RenderStandings standings={currLeague} />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </article>
    );
};

export default Standings;

import React, { useState, useEffect } from "react";
import useFetch4 from "./useFetch4";
import NavBar from "./navBar";
import {
  Container,
  Col,
  Row,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import leagues from "./standings-leagues";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Teams = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [league, setLeague] = useState({
    leagueName: "Premier League",
    leagueCode: "PL",
  });

  const [url, setUrl] = useState(
    `https://api.football-data.org/v2/competitions/${league.leagueCode}/teams`
  );

  // const [teams, setTeams] = useState([]);
  const [isLoading, data] = useFetch4(url);

  // useEffect(() => {
  //   if (!isLoading) setTeams(data);
  // }, [isLoading, data]);

  const setActive = (code, name) => {
    if (code !== league.leagueCode) {
      setLeague({ ...league, leagueCode: code, leagueName: name });
      setUrl(`http://api.football-data.org/v2/competitions/${code}/teams`);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    //console.log(data);
    return (
      <div>
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
                League Teams
              </span>
            </h1>
            <h4>
              Select a league to see the playing teams for the season and see
              the team details as well
            </h4>
            <Container style={{ textAlign: "center", marginBottom: "50px" }}>
              <Row>
                <Col>
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
                  {data.competition.name}
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
                  Season {data.season.startDate.substring(2, 4)}/
                  {data.season.endDate.substring(2, 4)}
                </span>
                <br />
                <span style={{ fontSize: "20px" }}>
                  {data.competition.area.name}
                </span>
                <br />
                <span style={{ fontSize: "20px" }}>All teams</span>
              </div>
              <Container fluid>
                {data.teams.map((team, index) => {
                  return (
                    <section key={team.tla}>
                      <Row style={{ marginBottom: "20px" }}>
                        <Col lg="4">
                          <span className="teamnum">{index + 1}</span>
                          <span className="logo">
                            <img className="logo" src={team.crestUrl} />
                          </span>
                          <span className="clubabb">{team.tla}</span>
                        </Col>
                        <Col lg="4">
                          <div className="clubname">{team.name}</div>
                          <Link
                            to={{
                              pathname: `/teams/${team.id}`,
                              state: {
                                id: team.id,
                              },
                            }}
                          >
                            <Button className="squadbtn">
                              Squad <AiOutlineArrowRight />
                            </Button>
                          </Link>
                        </Col>
                        <Col lg="4">
                          <div className="contactClub">
                            Email: {team.email !== null ? team.email : "~"}
                            <br />
                            <a
                              href="https://www.arsenal.com"
                              target="_blank"
                              style={{ textDecoration: "none" }}
                            >
                              {team.website} <AiOutlineArrowRight />
                            </a>
                          </div>
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: "10px" }}>
                        <Col lg="3" md="12">
                          <span className="clubInfoTitle">Stadium</span>
                        </Col>
                        <Col lg="4" md="12">
                          <div className="clubInfoContent">
                            {team.venue} <br />{" "}
                            <span style={{ fontSize: "20px" }}>
                              {team.address}
                            </span>
                          </div>
                        </Col>
                        <Col lg="3">
                          <span className="clubInfoTitle">Founded</span>
                        </Col>
                        <Col lg="1">
                          <div className="clubInfoContent">{team.founded}</div>
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: "20px" }}>
                        <hr
                          style={{
                            border: "ridge rgb(21,21,150) 1px",
                            width: "60%",
                            margin: "auto",
                          }}
                        />
                      </Row>
                    </section>
                  );
                })}
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Teams;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import useFetch4 from "./useFetch4";
import { Container, Row, Col, Button } from "reactstrap";
import { AiFillCaretLeft } from "react-icons/ai";
import NavBar from "./navBar";

const TeamsSquad = () => {
  const location = useLocation();
  const id = location.state.id;
  const url = `https://api.football-data.org/v2/teams/${id}`;
  var today = new Date();
  var day = String(today.getDate()).padStart(2, "0");
  var month = String(today.getMonth() + 1).padStart(2, "0");
  var year = today.getFullYear();

  const calculateAge = (dob) => {
    var day2 = dob.substring(8, 10);
    var month2 = dob.substring(5, 7);
    var year2 = dob.substring(0, 4);

    var age = year - year2;
    if (month < month2) age--;
    if (month === month2 && day < day2) age--;

    return age;
  };

  const [isLoading, data] = useFetch4(url);
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <header className="intro">
          <NavBar />
        </header>
        <Container style={{ fontFamily: '"Noto Sans JP", sans-serif' }}>
          <Link to="/teams">
            <Button className="linkbtn">
              <AiFillCaretLeft />
              Go back
            </Button>
          </Link>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h1 style={{ fontWeight: "bold" }}>{data.name}</h1>
            <img src={data.crestUrl} className="logo" />
            <h3 style={{ paddingTop: "20px" }}>{data.area.name}</h3>
          </div>

          <div style={{ backgroundColor: "lavender", marginBottom: "30px" }}>
            <h2 className="position">Goalkeepers</h2>
            <Row style={{ textAlign: "center" }}>
              {data.squad.map((player) => {
                if (
                  player.role === "PLAYER" &&
                  player.position === "Goalkeeper"
                ) {
                  return (
                    <Col
                      xl="3"
                      md="6"
                      xs="12"
                      key={player.id}
                      style={{ textAlign: "center" }}
                    >
                      <div className="player">
                        <div className="player-name">{player.name}</div>
                        <div className="player-info">
                          {calculateAge(player.dateOfBirth)},{" "}
                          {player.nationality}
                        </div>
                      </div>
                    </Col>
                  );
                }
              })}
            </Row>
          </div>
          <div style={{ backgroundColor: "lavender", marginBottom: "30px" }}>
            <h2 className="position">Defenders</h2>
            <Row style={{ textAlign: "center" }}>
              {data.squad.map((player) => {
                if (
                  player.role === "PLAYER" &&
                  player.position === "Defender"
                ) {
                  return (
                    <Col
                      xl="3"
                      md="6"
                      xs="12"
                      key={player.id}
                      style={{ textAlign: "center" }}
                    >
                      <div className="player">
                        <div className="player-name">{player.name}</div>
                        <div className="player-info">
                          {calculateAge(player.dateOfBirth)},{" "}
                          {player.nationality}
                        </div>
                      </div>
                    </Col>
                  );
                }
              })}
            </Row>
          </div>
          <div style={{ backgroundColor: "lavender", marginBottom: "30px" }}>
            <h2 className="position">Midfielders</h2>
            <Row style={{ textAlign: "center" }}>
              {data.squad.map((player) => {
                if (
                  player.role === "PLAYER" &&
                  player.position === "Midfielder"
                ) {
                  return (
                    <Col
                      xl="3"
                      md="6"
                      xs="12"
                      key={player.id}
                      style={{ textAlign: "center" }}
                    >
                      <div className="player">
                        <div className="player-name">{player.name}</div>
                        <div className="player-info">
                          {calculateAge(player.dateOfBirth)},{" "}
                          {player.nationality}
                        </div>
                      </div>
                    </Col>
                  );
                }
              })}
            </Row>
          </div>
          <div style={{ backgroundColor: "lavender", marginBottom: "30px" }}>
            <h2 className="position">Attackers</h2>
            <Row style={{ textAlign: "center" }}>
              {data.squad.map((player) => {
                if (
                  player.role === "PLAYER" &&
                  player.position === "Attacker"
                ) {
                  return (
                    <Col
                      xl="3"
                      md="6"
                      xs="12"
                      key={player.id}
                      style={{ textAlign: "center" }}
                    >
                      <div className="player">
                        <div className="player-name">{player.name}</div>
                        <div className="player-info">
                          {calculateAge(player.dateOfBirth)},{" "}
                          {player.nationality}
                        </div>
                      </div>
                    </Col>
                  );
                }
              })}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
};

export default TeamsSquad;

import React from "react";
import { Container, Button, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const StandingsIntro = ({ reference }) => {
  return (
    <div className="intro" ref={reference}>
      <div>
        <Container fluid>
          <Row className="standings-intro">
            <Col xl="2">
              <h1
                style={{
                  fontSize: "50px",
                  margin: "0 0",
                }}
              >
                Standings
              </h1>
            </Col>
            <Col xl="1">
              <div className="intro-separator"></div>
            </Col>
            <Col xl="9">
              <div>
                <p className="intro-content">
                  Stay up to date with team standings for some of the best
                  leagues and international competitions like Premier League, La
                  Liga & Euro Cup.
                </p>
                <p className="intro-content">
                  Filter the standings based on home matches, away matches, or
                  see the overall stats.
                </p>
                <br />
                <Link
                  to={{
                    pathname: `/standings/PL`,
                    // state: {
                    //   name: { name },
                    //   leagueArr: { leagueArr },
                    // },
                  }}
                >
                  <Button
                    className="intro-btn"
                    style={{
                      backgroundColor: "white",
                      color: "rgb(21, 21, 156)",
                    }}
                  >
                    Check Standings
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default StandingsIntro;

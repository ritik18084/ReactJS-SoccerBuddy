import React from "react";
import { Container, Button, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const MatchesIntro = ({ reference }) => {
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
                Schedule
              </h1>
            </Col>
            <Col xl="1">
              <div className="intro-separator"></div>
            </Col>
            <Col xl="9">
              <div>
                <p className="intro-content">
                  Never miss the date on your favorite matches from the most
                  popular leagues.
                </p>
                <p className="intro-content">
                  Filter the schedule of various leagues based on matchdays
                </p>
                <br />
                <Link
                  to={{
                    pathname: `/matches`,
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
                    Show Schedules
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

export default MatchesIntro;

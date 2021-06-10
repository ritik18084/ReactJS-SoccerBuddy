import React from "react";
import { Container, Button, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const TeamsIntro = ({ reference }) => {
  return (
    <div
      className="intro"
      style={{ backgroundColor: "white", backgroundImage: "none" }}
      ref={reference}
    >
      <div>
        <Container fluid style={{ color: "black" }}>
          <Row className="standings-intro">
            <Col xl="2">
              <h1
                style={{
                  fontSize: "50px",
                  margin: "0 0",
                }}
              >
                Teams
              </h1>
            </Col>
            <Col xl="1" style={{ textAlign: "center" }}>
              <div
                className="intro-separator"
                style={{ borderColor: "rgb(21, 21, 156)" }}
              ></div>
            </Col>
            <Col xl="9">
              <div>
                <p className="intro-content">
                  Get informed on the teams that are part of the top leagues.
                </p>
                <p className="intro-content">
                  Select any team to see the in depth sqaud for the team.
                </p>
                <br />
                <Link
                  to={{
                    pathname: `/teams`,
                  }}
                >
                  <Button
                    className="intro-btn"
                    style={{
                      backgroundColor: "rgb(21, 21, 156)",
                      color: "white",
                    }}
                  >
                    Show Teams
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

export default TeamsIntro;

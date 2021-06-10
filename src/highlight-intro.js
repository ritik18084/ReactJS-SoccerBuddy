import React from "react";
import { Container, Button, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const HighlightsIntro = ({ reference }) => {
  return (
    <div
      className="intro"
      style={{ backgroundColor: "white", backgroundImage: "none" }}
    >
      <div ref={reference}>
        <Container fluid style={{ color: "black" }}>
          <Row className="standings-intro">
            <Col xl="2">
              <h1
                style={{
                  fontSize: "50px",
                  margin: "0 0",
                }}
              >
                Highlights
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
                  Watch highlights for latest matches from some of the best
                  leagues in the world.
                </p>
                <p className="intro-content">
                  Filter your match highlights according to the league you want
                  to see.
                </p>
                <br />
                <Link
                  to={{
                    pathname: `/highlights`,
                  }}
                >
                  <Button
                    className="intro-btn"
                    style={{
                      backgroundColor: "rgb(21, 21, 156)",
                      color: "white",
                    }}
                  >
                    Show Highlights
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

export default HighlightsIntro;

import React from "react";
import { Container, Col, Row } from "reactstrap";
import { AiOutlineDown } from "react-icons/ai";
import NavBar2 from "./navBar2";

const Overview = ({ click, click2, click3, click4 }) => {
  return (
    <article>
      <header className="intro">
        <div className="media-center">
          <NavBar2
            click={click}
            click2={click2}
            click3={click3}
            click4={click4}
          />
          <Container fluid className="hero">
            <Row>
              <Col className="intro-left" xl="6">
                <Col>
                  <h1 className="brand">Soccer Buddy</h1>
                  <h4 style={{ fontWeight: "bold" }}>ALL YOUR FOOTBALL</h4>
                </Col>
                <Row>
                  <Col>
                    <p className="intro-para">
                      Soccer Buddy is an easily accesible web app to help you
                      catch up with the latest in the football world. It covers
                      some of the world's most popular leagues and international
                      competitions by providing team news, fixtures, highlights
                      and a lot more!
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xl="6" className="intro-right">
                <h1>Official League Websites</h1>
                <div>
                  <button className="btn-league">
                    <a
                      style={{
                        textDecoration: "none",
                        color: "#2E51A2",
                      }}
                      href="https://www.premierleague.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Premier League
                    </a>
                  </button>
                </div>
                <div>
                  <button className="btn-league">
                    <a
                      style={{
                        textDecoration: "none",
                        color: "#2E51A2",
                      }}
                      href="https://www.legaseriea.it/en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Serie A
                    </a>
                  </button>
                </div>
                <div>
                  <button className="btn-league">
                    <a
                      style={{ textDecoration: "none", color: "#2E51A2" }}
                      href="https://www.laliga.com/en-GB"
                      target="_blank"
                      rel="noreferrer"
                    >
                      La Liga
                    </a>
                  </button>
                </div>
                <div>
                  <button className="btn-league">
                    <a
                      style={{ textDecoration: "none", color: "#2E51A2" }}
                      href="https://www.bundesliga.com/en/bundesliga"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Bundesliga
                    </a>
                  </button>
                </div>
                <div>
                  <button className="btn-league">
                    <a
                      style={{ textDecoration: "none", color: "#2E51A2" }}
                      href="https://www.uefa.com/uefachampionsleague/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Champions League
                    </a>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
          <p
            style={{
              fontSize: "50px",
              marginTop: "50px",
              paddingBottom: "50px",
            }}
          >
            Explore <AiOutlineDown />
          </p>
        </div>
      </header>
    </article>
  );
};

export default Overview;

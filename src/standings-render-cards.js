import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";

const RenderStandings = ({ standings }) => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  // console.log(size);
  if (size > 991) {
    return (
      <Container fluid style={{ fontSize: "16px", fontWeight: "600" }}>
        <Row className="standings-table-cols">
          <Col lg="1">Position</Col>
          <Col lg="3">Team</Col>
          <Col lg="2">Form</Col>
          <Col lg="1">Played</Col>
          <Col lg="2">W/D/L</Col>
          <Col lg="1">Goals</Col>
          <Col lg="1">GD</Col>
          <Col lg="1">Points</Col>
        </Row>
        {standings.map((record) => {
          let form = record.form;
          if (form === "") form = "~";
          let arr = form.split(",");
          return (
            <div key={record.position}>
              <Row className="standings-record">
                <Col lg="1">{record.position}</Col>
                <Col lg="3" style={{ textAlign: "left" }}>
                  <span>
                    <img
                      src={record.team.crestUrl}
                      alt={record.team.name}
                      style={{
                        width: "40px",
                        height: "40px",
                        marginRight: "5px",
                      }}
                    ></img>
                  </span>
                  <span>{record.team.name}</span>
                </Col>
                <Col lg="2">
                  {arr.map((result) => {
                    if (result === "W")
                      return (
                        <span style={{ backgroundColor: "green" }}>W </span>
                      );
                    else if (result === "L")
                      return <span style={{ backgroundColor: "red" }}>L </span>;
                    else if (result === "D")
                      return (
                        <span style={{ backgroundColor: "grey" }}>D </span>
                      );
                    else return <span>~</span>;
                  })}
                </Col>
                <Col lg="1">{record.playedGames}</Col>
                <Col lg="2">
                  {record.won}/{record.draw}/{record.lost}
                </Col>
                <Col lg="1">
                  {record.goalsFor}:{record.goalsAgainst}
                </Col>
                <Col lg="1">{record.goalDifference}</Col>
                <Col lg="1">{record.points}</Col>
              </Row>
            </div>
          );
        })}
      </Container>
    );
  } else {
    return (
      <Container fluid style={{ fontSize: "20px" }}>
        {standings.map((record) => {
          let form = record.form;
          if (form === "") form = "~";
          let arr = form.split(",");
          return (
            <div key={record.position}>
              <Row className="standings-media" style={{ marginBottom: "20px" }}>
                <Col md="7" xs="12">
                  <span>
                    {record.position}
                    <img
                      src={record.team.crestUrl}
                      alt={record.team.name}
                      style={{
                        width: "40px",
                        height: "40px",
                        marginRight: "10px",
                        marginLeft: "30px",
                      }}
                    ></img>
                  </span>
                  <span>{record.team.name}</span>
                </Col>
                <Col md="3" xs="12">
                  {arr.map((result) => {
                    if (result === "W")
                      return (
                        <span style={{ backgroundColor: "green" }}>W </span>
                      );
                    else if (result === "L")
                      return <span style={{ backgroundColor: "red" }}>L </span>;
                    else if (result === "D")
                      return (
                        <span style={{ backgroundColor: "grey" }}>D </span>
                      );
                    else return <span>~</span>;
                  })}
                </Col>
                <Col md="2" xs="12">
                  Pts: {record.points}
                </Col>
              </Row>
              <Row className="standings-record">
                <Col sm="2" xs="6">
                  Pld: {record.playedGames}
                </Col>
                <Col sm="4" xs="6">
                  Goals : {record.goalsFor}/{record.goalsAgainst}
                </Col>
                <Col sm="2" xs="6">
                  GD: {record.goalDifference}
                </Col>
                <Col sm="4" xs="6">
                  W/D/L: {record.won}/{record.draw}/{record.lost}
                </Col>
              </Row>
            </div>
          );
        })}
      </Container>
    );
  }
};

export default RenderStandings;

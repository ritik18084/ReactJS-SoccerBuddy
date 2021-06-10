import React from "react";
import { useState } from "react";
import { Col, Card, CardImg, CardBody, CardTitle, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

const RenderCard = ({ name, logo, website, leagueArr }) => {
  const [className, setClassName] = useState("");

  const mouseEnter = (e) => {
    setClassName("leagueimg");
  };

  const mouseLeave = (e) => {
    setClassName("");
  };

  return (
    <Col md="12" lg="6" key={name}>
      <Card
        className="leaguecard"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        style={{ width: "90%", height: "90%" }}
      >
        <CardBody>
          <Row>
            <Col>
              <CardImg src={logo} alt={name} className={className} />
            </Col>
            <Col className="cardcontent">
              <div>
                <CardTitle tag="h1">{name}</CardTitle>
                <br />
                <div className="card-links">
                  <a
                    href={website}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      borderBottom: "2px rgb(21, 21, 156) ridge",
                      paddingBottom: "10px",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Website <AiFillCaretRight />
                  </a>
                </div>
                <div className="card-links">
                  <Link
                    to={{
                      pathname: `/highlights/${name}`,
                      state: {
                        name: { name },
                        leagueArr: { leagueArr },
                      },
                    }}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        color: "black",
                        textDecoration: "none",
                      }}
                    >
                      Highlights <AiFillCaretRight />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RenderCard;

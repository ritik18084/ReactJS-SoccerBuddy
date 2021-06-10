import React from "react";
import { Row, Col } from "reactstrap";
import ShowMatches from "./showMatches";

const MatchCard = ({ matchObj, ind, toggleVid, expandArr }) => {
  return (
    <>
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button className="matchbtn" onClick={() => toggleVid(ind)}>
            <span>{matchObj.title}</span>
          </button>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center" }}>
          {expandArr[ind] ? (
            <ShowMatches
              link={matchObj.videos[0].embed}
              title={matchObj.videos[0].title}
            />
          ) : null}
        </Col>
      </Row>
    </>

    // <div style={{ width: "100%", textAlign: "center" }}>
    //   <Button color="dark" className="matchbtn" onClick={() => toggleVid(ind)}>
    //     <span>{matchObj.title}</span>
    //   </Button>
    //   {expandArr[ind] ? (
    //     <ShowMatches
    //       link={matchObj.videos[0].embed}
    //       title={matchObj.videos[0].title}
    //     />
    //   ) : null}
    // </div>
  );
};

export default MatchCard;

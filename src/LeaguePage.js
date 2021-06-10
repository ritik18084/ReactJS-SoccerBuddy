import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container } from "reactstrap";
import NavBar from "./navBar";
import MatchCard from "./matchCard";
import { AiFillCaretLeft } from "react-icons/ai";

const LeaguePage = () => {
  const location = useLocation();
  const { name } = location.state.name;
  const { leagueArr } = location.state.leagueArr;
  // console.log(name);
  // console.log(leagueArr);
  const [expandArr, setExpandArr] = useState(
    new Array(leagueArr.length).fill(false)
  );

  const toggleVid = (ind) => {
    const newArr = new Array(leagueArr.length).fill(false);
    if (expandArr[ind] !== true) newArr[ind] = true;
    setExpandArr(newArr);
  };

  return (
    <>
      <header className="intro">
        <NavBar />
      </header>
      <div>
        <Container>
          <Link to="/highlights">
            <Button className="linkbtn">
              <AiFillCaretLeft />
              Go back
            </Button>
          </Link>
          <h1 className="leagueHeading">{name}</h1>
          <div className="videos">
            {leagueArr.map((matchObj, ind) => {
              return (
                <MatchCard
                  key={matchObj.title}
                  matchObj={matchObj}
                  ind={ind}
                  toggleVid={toggleVid}
                  expandArr={expandArr}
                />
              );
            })}
          </div>

          {/* <div className="videos">
            {leagueArr.map((matchObj, ind) => {
              return (
                <MatchCard
                  key={matchObj.title}
                  matchObj={matchObj}
                  ind={ind}
                  toggleVid={toggleVid}
                  expandArr={expandArr}
                />
              );
            })}
          </div> */}
        </Container>
      </div>
    </>
  );
};

export default LeaguePage;

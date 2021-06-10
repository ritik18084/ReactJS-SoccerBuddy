import React from "react";
import { useFetch } from "./useFetch";
import NavBar from "./navBar";
import { allLeagues } from "./allLeagues";
import RenderCard from "./renderCard";
import { Container, Row } from "reactstrap";

const url = "https://www.scorebat.com/video-api/v1/";
const Highlights = () => {
  var { isLoading, data } = useFetch(url);
  data = data.filter((match) => match.competition.name in allLeagues);
  //console.log(data);

  var leagues = {};
  data.forEach((match) => {
    var name = match.competition.name;
    if (name in leagues) {
      leagues[name].push(match);
    } else {
      leagues[name] = [];
      leagues[name].push(match);
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <header className="intro">
          <NavBar />
        </header>
        <div className="standings-panel">
          <div className="media-center">
            <h1 className="standings-title">
              <span
                style={{
                  borderBottom: "4px ridge white",
                  borderColor: "blue",
                  padding: "0 20px",
                  paddingBottom: "20px",
                }}
              >
                Highlights
              </span>
            </h1>
            <h4>Select a league to see the latest highlights</h4>
            <br />
            <Container
              style={{
                backgroundColor: "lavender",
                borderRadius: "15px",
                padding: "50px 0",
              }}
            >
              <Row>
                {Object.keys(allLeagues).map((key) => {
                  if (key in leagues) {
                    return (
                      <RenderCard
                        key={key}
                        {...allLeagues[key]}
                        leagueArr={leagues[key]}
                      />
                    );
                  }
                })}
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
};

export default Highlights;

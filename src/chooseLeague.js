import React from "react";
import RenderCard from "./renderCard";
import { Container, Row } from "reactstrap";
import { allLeagues } from "./allLeagues";

const ChooseLeague = ({ data }) => {
  var leagues = {};

  data = data.filter((match) => match.competition.name in allLeagues);

  data.forEach((match) => {
    var name = match.competition.name;
    if (name in leagues) {
      leagues[name].push(match);
    } else {
      leagues[name] = [];
      leagues[name].push(match);
    }
  });

  return (
    <div className="bg1">
      <Container>
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
  );
};

export default ChooseLeague;

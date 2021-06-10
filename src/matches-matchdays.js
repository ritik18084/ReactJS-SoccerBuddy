import React from "react";
import { Button } from "reactstrap";

const MatchesMatchdays = ({ total, click }) => {
  let arr = [];
  for (let i = 1; i <= total; i++) {
    arr.push(
      <Button key={i} className="matchdaybtn" onClick={() => click(i)}>
        {i}
      </Button>
    );
    if (i % 8 === 0) arr.push(<br key={i + "/"} />);
  }
  return <div>{arr}</div>;
};

export default MatchesMatchdays;

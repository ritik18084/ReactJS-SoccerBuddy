import React from "react";

const ShowMatches = ({ link, title }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="vid" dangerouslySetInnerHTML={{ __html: link }}></div>;
    </>
  );
};

export default ShowMatches;

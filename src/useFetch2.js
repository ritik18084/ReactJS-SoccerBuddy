import { useState, useEffect } from "react";
import { apiKeys } from "./apiKeys";

const useFetch2 = (url) => {
  const [data, setData] = useState([]);
  const [overall, setOverall] = useState([]);
  const [home, setHome] = useState([]);
  const [away, setAway] = useState([]);

  const getData = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Auth-Token": apiKeys.token },
    });
    const data = await response.json();
    setData(data);
    setOverall(data["standings"][0]["table"]);
    setHome(data["standings"][1]["table"]);
    setAway(data["standings"][2]["table"]);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, [url]);

  return [data, overall, home, away];
};

export default useFetch2;

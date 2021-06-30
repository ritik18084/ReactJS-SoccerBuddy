import { useState, useEffect } from "react";
import { apiKeys } from "./apiKeys";

const useFetch2 = (url) => {
  const [data, setData] = useState([]);
  const [overall, setOverall] = useState([]);
  const [home, setHome] = useState([]);
  const [away, setAway] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Auth-Token": apiKeys.token },
    });
    const data = await response.json();
    //console.log(data);
    setData(data);
    setOverall(data["standings"][0]["table"]);

    if (data["standings"][1]) {
      setHome(data["standings"][1]["table"]);
    } else {
      setHome(data["standings"][0]["table"]);
    }

    if (data["standings"][2]) {
      setAway(data["standings"][2]["table"]);
    } else {
      setAway(data["standings"][0]["table"]);
    }

    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, [url]);

  return [data, overall, home, away, isLoading];
};

export default useFetch2;

import { useState, useEffect } from "react";
import { apiKeys } from "./apiKeys";

const useFetch4 = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Auth-Token": apiKeys.token },
    });
    const data = await response.json();
    setData(data);
    setIsLoading(false);
    //console.log(data);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return [isLoading, data];
};

export default useFetch4;

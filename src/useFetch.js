import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setIsLoading(false);
    //console.log(data);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { isLoading, data };
};

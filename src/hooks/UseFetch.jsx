import { useEffect } from "react";
import { useState } from "react";

export const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [pending, setIspending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      setIspending(true);

      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIspending(false);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    };
    FetchData();
  }, [url]);
  return { data, pending, error };
};

import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = (url, page) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const LIMIT = 6;

  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const queryParam = new URLSearchParams();
        if (page) {
          queryParam.append("limit", LIMIT);
          queryParam.append("skip", (page - 1) * LIMIT);
          queryParam.append("sort", "createdAt:-1");
        }
        const res = await axios.get(`${url}?${queryParam}`);

        if (res.status === 200 && !cancel) {
          const newData = res.data;
          setData((r) =>
            Array.isArray(newData) ? [...r, ...newData] : [newData]
          );
        } else if (!cancel) {
          setError("Ooops, erreur res.ok !!!");
        }
      } catch (error) {
        setError("Ooops, erreur catch!!!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => (cancel = true);
  }, [url, page]);
  return [[data, setData], isLoading, error];
};

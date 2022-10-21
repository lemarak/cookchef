import axios from "axios";
import { useEffect, useState } from "react";
import { getRecipes } from "../api";

export const useFetchRecipe = (url, page) => {
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
        const newData = await getRecipes(queryParam);
        if (!cancel) {
          setData(newData);
        }
      } catch (error) {
        setError("Ooops, erreur catch!!!");
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
      }
    };
    fetchData();
    return () => (cancel = true);
  }, [url, page]);
  return [[data, setData], isLoading, error];
};

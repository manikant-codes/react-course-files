import { useEffect, useState } from "react";

function useFetch(fn) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        setLoading(true);
        const result = await fn();
        setData(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { loading, data, error, setData };
}

export default useFetch;

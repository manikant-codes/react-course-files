import { useEffect, useState } from "react";

function useFetch(fn) {
  const [loading, setLoading] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(
    function () {
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
    },
    [fn]
  );

  return { loading, data, error };
}

export default useFetch;

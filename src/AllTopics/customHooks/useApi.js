import { useEffect, useState } from "react";
export const useApi = (url) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  async function getApiData() {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setApiData(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getApiData();
  }, url);
  return { apiData, loading };
};

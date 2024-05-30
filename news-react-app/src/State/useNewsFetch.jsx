import { useEffect, useState } from "react";

export default function useNewsFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=efdebbfb756e44839919fe2794117bdc"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

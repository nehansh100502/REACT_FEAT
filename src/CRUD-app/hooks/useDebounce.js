import { useEffect, useState } from "react";

export const useDebounce = (query, delay = 1000) => {
  const [debounceQuery, setDebounceQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceQuery(query);
    }, delay);

    return () => clearTimeout(timer);
  }, [query]);

  return debounceQuery;
};

export default useDebounce;

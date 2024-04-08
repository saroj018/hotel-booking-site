import { useEffect, useState } from "react";

export const useDebouce = (state, delay) => {
  const [debounceResult, setDebounceResult] = useState(state);
  useEffect(() => {
    let id = setTimeout(() => {
      setDebounceResult(state);
    }, delay);

    return () => clearTimeout(id);
  },[state]);

  return debounceResult
};

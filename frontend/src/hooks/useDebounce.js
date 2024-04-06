import { useEffect, useState } from "react";

export const useDebouce = (fun, base, delay) => {
  const [debounceResult, setDebounceResult] = useState();

  useEffect(() => {
    let id = setTimeout(async() => {
      let result = await fun();
      setDebounceResult(result);
    }, delay);

    return () => clearTimeout(id);
  }, [base]);

  return debounceResult;
};

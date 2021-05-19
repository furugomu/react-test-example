import { useCallback, useState } from "react";

export default function useCounter(defaultValue = 0) {
  const [count, setCount] = useState(defaultValue);
  const increment = useCallback(() => setCount((v) => v + 1), []);
  return { count, increment };
}

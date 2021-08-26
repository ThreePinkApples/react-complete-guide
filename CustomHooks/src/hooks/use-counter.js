import { useEffect, useState } from "react";

export default function useCounter(start, increment) {
  const [counter, setCounter] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + increment);
    }, 1000);

    return () => clearInterval(interval);
  }, [increment]);

  return counter;
}

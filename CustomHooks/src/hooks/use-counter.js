import { useEffect, useState } from "react";

export default function useCounter(start, step) {
  const [counter, setCounter] = useState(start || 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + (step || 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [step]);

  return counter;
}

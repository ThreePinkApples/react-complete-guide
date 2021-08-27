import { useCallback, useState } from "react";

export default function useHttp() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (requestConfig, callback) => {
    setError("");
    try {
      setIsLoading(true);
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        headers: requestConfig.headers || {},
        body: !!requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        throw Error(
          "Error when sending HTTP request. Status code: " + response.status
        );
      }
      const data = await response.json();
      callback(data);
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    sendRequest,
    isLoading,
    error,
  };
}

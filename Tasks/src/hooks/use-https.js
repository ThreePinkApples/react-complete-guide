import { useState } from "react";

export default function useHttp(requestConfig, callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (requestBody) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        headers: requestConfig.headers || {},
        body: requestBody ? JSON.stringify(requestBody) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed! Status code: " + response.status);
      }
      const responseData = await response.json();
      callback(responseData, requestBody);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };
  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest
  };
}

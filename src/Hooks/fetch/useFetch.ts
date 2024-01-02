import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

// Define a generic type for the data returned by the API
type Data<T> = T | null;

// Define a custom hook that takes a URL and an optional config object
const useFetch = <T>(url: string, config?: AxiosRequestConfig) => {
  // Use state hooks to store the data, error and loading status
  const [data, setData] = useState<Data<T>>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  

  // Use effect hook to fetch data when the URL or config changes
  useEffect(() => {
    // Set loading to true and clear previous data and error
    setLoading(true);
    setData(null);
    setError(null);

    // Use axios to make the request with the given URL and config
    axios(url, config)
      .then((response) => {
        // Set data to the response data
        setData(response.data);
      })
      .catch((error) => {
        // Set error to the error object
        setError(error);
      })
      .finally(() => {
        // Set loading to false
        setLoading(false);
      });
  }, [url, config]);

  // Return the data, error and loading status
  return { data, error, loading };
};

export default useFetch;

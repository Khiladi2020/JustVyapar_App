import { useState } from 'react';

const useApi = (apiFn) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const request = async (...args) => {
    try {
      setLoading(true);
      const response = await apiFn(...args);

      setError(false);
      setData(response);
      console.log(response);
    } catch (err) {
      console.log('Got a Error while making request:')
      console.log(err.message || err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    data,
    request,
  };
};

export default useApi;

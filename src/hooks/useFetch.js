import { useState, useEffect } from 'react';

export const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiURL = `https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json`;
    const getData = async () => {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setData(data);
      } catch (error) {
        return new Error('Invalid fetch');
      }
    };
    getData();
  }, []);

  return { data };
};

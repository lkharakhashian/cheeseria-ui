import { useState, useEffect } from 'react';
import { Cheese } from '../types';
import axios from 'axios';

const useCheeses = () => {
  const [cheeses, setCheeses] = useState<Cheese[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCheeses = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/cheeses'); //TODO: move to config
        setCheeses(response.data);
      } catch (err) {
        setError('Failed to fetch cheeses');
      } finally {
        setLoading(false);
      }
    };

    fetchCheeses();
  }, []);

  return { cheeses, loading, error };
};

export default useCheeses;

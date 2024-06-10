import React, { useState } from 'react';
import { Typography, Container } from '@mui/material';
import CheeseList from '../components/CheeseList';
import useCheeses from '../hooks/useCheeses';
import { Cheese } from '../types';

const ExplorePage: React.FC = () => {
  const { cheeses, loading, error } = useCheeses();
  const [cartItems, setCartItems] = useState<Cheese[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addToCart = (cheese: Cheese) => {
    const updatedCartItems = [...cartItems, cheese];
    setCartItems(updatedCartItems);
    const updatedTotalPrice = updatedCartItems.reduce((acc, item) =>  acc + item.price, 0);
    setTotalPrice(updatedTotalPrice);
  };

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Cheeseria
      </Typography>
      <Typography variant="h6" gutterBottom>
        Total Price: ${totalPrice.toFixed(2)}
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : error ? (
        <Typography>{error}</Typography>
      ) : (
        <CheeseList cheeses={cheeses} addToCart={addToCart} />
      )}
    </Container>
  );
};

export default ExplorePage;

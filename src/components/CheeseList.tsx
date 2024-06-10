import React from 'react';
import { Cheese } from '../types';
import CheeseItem from './CheeseItem';
import useStyles from '../styles/useStyles';

//TODO: add pagination 
interface CheeseListProps {
  cheeses: Cheese[];
  addToCart: (cheese: Cheese) => void;
}

const CheeseList: React.FC<CheeseListProps> = ({ cheeses, addToCart }) => {
  const classes = useStyles();

  return (
    <div className={classes.cheeseList}>
      {cheeses.map((cheese) => (
        <CheeseItem key={cheese.id} cheese={cheese} addToCart={() => addToCart(cheese)} />
      ))}
    </div>
  );
};

export default CheeseList;

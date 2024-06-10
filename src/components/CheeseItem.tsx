import React from 'react';
import { Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Cheese } from '../types';
import useStyles from '../styles/useStyles';

interface CheeseItemProps {
  cheese: Cheese;
  addToCart: () => void;
}

const CheeseItem: React.FC<CheeseItemProps> = ({ cheese, addToCart }) => {
  const classes = useStyles();
  const price = cheese.price;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={cheese.image}
        title={cheese.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cheese.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {cheese.color}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          ${price.toFixed(2)}/kg
        </Typography>
        <IconButton onClick={addToCart} color="secondary">
          <ShoppingCart />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CheeseItem;

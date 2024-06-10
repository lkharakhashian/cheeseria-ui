import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheeseItem from '../src/components/CheeseItem';
import '@testing-library/jest-dom'

const cheese = {
  id: 1,
  name: 'Ricotta',
  color: 'white',
  price: 8.90,
  image: 'https://www.cheese.com/media/img/cheese/36-ricotta-di-bufala-shutterstock_1460970062.jpg',
};

//TODO:Add more tests
test('renders CheeseItem component', () => {
  const addToCart = jest.fn();
  
  render(<CheeseItem cheese={cheese} addToCart={addToCart} />);
  
  const nameElement = screen.getByText(cheese.name);
  expect(nameElement).toBeInTheDocument();
  
  const colorElement = screen.getByText(cheese.color);
  expect(colorElement).toBeInTheDocument();
  
  const priceElement = screen.getByText(`$${cheese.price.toFixed(2)}/kg`);
  expect(priceElement).toBeInTheDocument();
  
  const cartButton = screen.getByRole('button');
  fireEvent.click(cartButton);
  
  expect(addToCart).toHaveBeenCalledTimes(1);
});

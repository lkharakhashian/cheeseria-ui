import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheeseList from '../src/components/CheeseList';
import '@testing-library/jest-dom'

const cheeses = [
  {
    id: 1,
    name: 'Ricotta',
    color: 'white',
    price: 8.90,
    image: 'https://www.cheese.com/media/img/cheese/36-ricotta-di-bufala-shutterstock_1460970062.jpg'
  },
  {
    id: 2,
    name: 'Mozzarella',
    color: 'black',
    price: 14.00,
    image: 'https://www.cheese.com/media/img/cheese/mozzarella_cheese_on_wooden_cutting_board.jpg',
  },
];

//TODO:Add more tests
test('renders CheeseList component', () => {
  const addToCart = jest.fn();

  render(<CheeseList cheeses={cheeses} addToCart={addToCart} />);

  cheeses.forEach(cheese => {
    const nameElement = screen.getByText(cheese.name);
    expect(nameElement).toBeInTheDocument();

    const colorElement = screen.getByText(cheese.color);
    expect(colorElement).toBeInTheDocument();

    const priceElement = screen.getByText(`$${cheese.price.toFixed(2)}/kg`);
    expect(priceElement).toBeInTheDocument();

    const cartButton = screen.getAllByRole('button')[cheeses.indexOf(cheese)];
    fireEvent.click(cartButton);

    expect(addToCart).toHaveBeenCalledTimes(cheeses.indexOf(cheese) + 1);
  });
});

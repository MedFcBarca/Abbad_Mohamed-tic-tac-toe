import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tic-Tac-Toe title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Tic-Tac-Toe/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders next player', () => {
  render(<App />);
  const nextPlayerElement = screen.getByText(/Next player/i);
  expect(nextPlayerElement).toBeInTheDocument();
});

test('renders go to game start', () => {
  render(<App />);
  const goToGameStartElement = screen.getByText(/Go to game start/i);
  expect(goToGameStartElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hats link', () => {
  render(<App />);
  const linkElement = screen.getByText(/SHOP/i);
  expect(linkElement).toBeInTheDocument();
});

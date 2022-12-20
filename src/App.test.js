import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hats link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hats/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project text', () => {
  render(<App />);
  const textElement = screen.getByText(/projeto react.*github pages/i);
  expect(textElement).toBeInTheDocument();
});

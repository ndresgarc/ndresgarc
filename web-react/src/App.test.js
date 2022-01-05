import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo', () => {
  render(<App />);
  const logoText = screen.getByText(/NDRESGARC/i);
  expect(logoText).toBeInTheDocument();
});

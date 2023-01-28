import { render, screen } from '@testing-library/react';
import Footer from '.';

test('Footer renders correctly', () => {
  render(<Footer />);
  const footElement = screen.getByText('Footer');
  expect(footElement).toBeInTheDocument();
});

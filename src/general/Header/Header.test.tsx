import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

test('Header renders logo & phone no correctly', () => {
  render(<Header />);
  const logoElement = screen.getByText(`Onom's Kitchen`);
  const phoneElement = screen.getByText(`+2348144893734`);
  expect(logoElement).toBeInTheDocument();
  expect(phoneElement).toBeInTheDocument();
});

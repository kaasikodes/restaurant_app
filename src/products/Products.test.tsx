import { screen, render } from '@testing-library/react';
import ProductsContainer from './ProductsContainer';
describe('Product Components test', () => {
  test('Render the items correctly after request is completed form api', async () => {
    render(<ProductsContainer />);
    const products = await screen.findAllByRole('listitem');
    expect(products).toHaveLength(2);
  });
});

import { screen, render } from '@testing-library/react';
import { testFoodItems } from 'mocks/handler';
import { server } from 'mocks/server';
import { rest } from 'msw';
import ProductItem from './ProductItem';
import ProductsContainer from './ProductsContainer';
describe('Product Components test', () => {
  test('Render Products Container', () => {
    render(<ProductsContainer />);
    const header = screen.getByText('Products');
    expect(header).toBeInTheDocument();
  });
  test('Render the loading component when request is being processed', async () => {
    render(<ProductsContainer />);
    const comp = await screen.findByText('loading');
    expect(comp).toBeInTheDocument();
  });
  test('Render the items correctly after request is completed form api', async () => {
    render(<ProductsContainer />);
    const products = await screen.findAllByRole('listitem');
    expect(products).toHaveLength(testFoodItems.length);
  });
  test('Render the error component when request fails', async () => {
    server.use(
      rest.get(
        `https://jsonplaceholder.typicode.com/posts`,
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<ProductsContainer />);
    const comp = await screen.findByText('error');
    expect(comp).toBeInTheDocument();
  });

  test('Product Item executes handleClick func', async () => {
    const dummyFunc = jest.fn();
    render(
      <ProductItem
        product={{ id: '1', name: 'Catfish' }}
        handleClick={dummyFunc}
      />
    );
    const item = await screen.findByRole('listitem');
    item.click();
    expect(dummyFunc).toBeCalled();
  });
  // TO DO test wrapper eg. context for global data, try authentication preferrably oauth2
  // TO DO test custom react hooks
});

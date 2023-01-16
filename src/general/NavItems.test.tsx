import { screen, render } from '@testing-library/react';
import { generalRoutes } from 'data/routes';
import NavItems from './NavItems';
import { GiProfit } from 'react-icons/gi';

describe('Nav Components', () => {
  const items = [
    {
      name: 'burgers',
      link: `${generalRoutes.productCategory}/burgers`,
      highlight: { value: '&sandwiches', color: 'bg-[#50d71e]' },
      icon: GiProfit,
    },
  ];

  test('Render a menu', () => {
    render(<NavItems items={items} />);
    const navMenu = screen.getByRole('menu');
    expect(navMenu).toBeInTheDocument();
  });
  test('Render a list of menu items', () => {
    render(<NavItems items={items} />);
    const navItemElements = screen.getAllByRole('menuitem');
    expect(navItemElements).toHaveLength(items.length);
  });
});

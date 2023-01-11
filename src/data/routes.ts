import React from 'react';

import { IconType } from 'react-icons/lib';

export const generalRoutes = {
  productCategory: '/product-category',
  product: '/product',
  home: '/',
};
export const specificRoutes = {
  productCategory: '/product-category/:id',
  product: '/product/:id',
};
export type TNavRoute = {
  name: string;
  link: string;
  highlight?: string | { value: string; color: string };
  icon: IconType;
  DropdownComp?: React.ReactNode;
};

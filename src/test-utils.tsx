import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import GlobalContextProvider from 'contexts/GlobalContextProvider';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

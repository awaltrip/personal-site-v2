import React from 'react';
// @ts-ignore // ignore IDE error "Cannot find module '@context/themeContext'"
import { ThemeProvider } from '@context/themeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

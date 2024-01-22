import React from 'react';
import { ThemeProvider } from '@context/themeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

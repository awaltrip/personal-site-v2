import React from 'react';
import { AnimatePresence } from 'framer-motion';
// @ts-ignore // ignore IDE error "Cannot find module '@context/themeContext'"
import { ThemeProvider } from '@context/themeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element }) => (
  <AnimatePresence mode="wait">{element}</AnimatePresence>
);

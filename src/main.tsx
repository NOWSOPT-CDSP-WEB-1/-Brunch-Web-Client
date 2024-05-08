import './index.css';

import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import reset from './styles/Reset.ts';
import theme from './styles/Theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

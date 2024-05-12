import { Global, ThemeProvider } from '@emotion/react';
import resetStyle from '@styles/reset.ts';
import theme from '@styles/theme.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={resetStyle} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

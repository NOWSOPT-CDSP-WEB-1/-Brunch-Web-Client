import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import resetStyle from './styles/reset.ts';
import theme from './styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={resetStyle} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

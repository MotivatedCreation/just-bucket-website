import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './App';
import theme from './theme';
import Layout from './Layout';
import PrivacyPolicy from './PrivacyPolicy';

import { CssBaseline } from '@mui/material';
import { APP_NAME, HOME_URL } from './constants';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router";
import { AppProvider, type Branding } from '@toolpad/core/AppProvider';


const BRANDING: Branding = {
  logo: <></>,
  title: APP_NAME,
  homeUrl: HOME_URL
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider
        theme={theme}
        branding={BRANDING}
      >
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from 'Pages/Home';

import { GlobalStyle } from 'Styles/GlobalStyles';
import { Layout } from 'Components/Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

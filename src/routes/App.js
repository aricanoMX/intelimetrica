import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from 'Pages/Home';
import { References } from 'Pages/References';

import { GlobalStyle } from 'Styles/GlobalStyles';
import { Layout } from 'Components/Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/references" component={References} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

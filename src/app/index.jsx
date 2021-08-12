import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlogPage from '@pages/Blog/';
import NotFound from '@pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BlogPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default App;

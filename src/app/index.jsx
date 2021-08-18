import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlogPage from '@pages/Blog/';
import SignInPage from '@pages/SignIn/';
import SignUpPage from '@pages/SignUp/';
import ProfilePage from '@pages/Profile/';
import NotFound from '@pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BlogPage} />
      <Route exact path="/login" component={SignInPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default App;

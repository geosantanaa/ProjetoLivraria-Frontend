import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from '../Login';
import { NovaSenha } from '../NovaSenha';
import Register from '../register';
import BookList from '../BookList';
import Sidebar from '../Sidebar';
import ForumScreen from '../ForumSreen';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/novasenha" component={NovaSenha} />
        <Route path="/BookList" component={BookList} />
        <Route path="/Sidebar" component={Sidebar} />
        <Route path="/ForumScreen" component={ForumScreen} />
      </Switch>
    </Router>
  );
};








import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './client/container/Home';
import 'antd/dist/antd.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <div>about</div>
          </Route>
          <Route path="/dashboard">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

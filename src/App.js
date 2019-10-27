import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './client/container/Home';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <div>about</div>
          </Route>
          <Route path="/dashboard">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>
)


// function App() {

//   return (
    
      
//     </div>
//   );
// }

export default App;

import React, { Component } from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Regiteur from './pages/Regiteur';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
let auth = false;
let Page1;
// if (auth==true) {
//                   Page1=Home;
//                 } else{
//                   Page1=Login;
//                 }
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path='/regiteur' component={Regiteur} />
            {/* <Route path="/route3" component={Page3}/> */}
          </div>
        </Router>
      </div>
    
    );
  }
}

export default App;

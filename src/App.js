import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Admin from './Component/Administration/Admin';
import AdministratorPanel from './Component/General/AdministratorPanel';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <AdministratorPanel />
            <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;

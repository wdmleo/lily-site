import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Admin from './Component/Administration/Admin';
import Pages from './Component/Administration/Pages';
import Editor from './Component/Administration/Editor';
import AdministratorPanel from './Component/General/AdministratorPanel';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <AdministratorPanel />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/pages" component={Editor} />
        </div>
      </Router>
    );
  }
}

export default App;

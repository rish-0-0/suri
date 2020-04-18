import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './Components';
import Uploader from './Components/Uploader';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Main />} />
          <Route path='/upload/:categ' render={({match}) => <Uploader category={match.params.categ} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

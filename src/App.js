import React from 'react';
import Start from './components/Start';
import { Quiz } from './components/Quiz';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Start} />
          <Route path='/quiz' exact component={Quiz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
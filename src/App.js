import React from 'react';
import Start from './components/Start';
import { Quiz } from './components/Quiz';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Highscore from './components/Highscore';
import './App.css';
import Endgame from './components/Endgame';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Start} />
          <Route path='/quiz' exact component={Quiz} />
          <Route path='/highscore' exact component={Highscore} />
          <Route path='/endgame' exact component={Endgame}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
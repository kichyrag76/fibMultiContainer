import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib'

function App() {
  return (
    <Router>    
      <div className="App">
      <header>
      {/*
        <img src={logo} className="App-logo" alt="logo" />
      */}
        <h1 className="App-title"> Welcome to React</h1>
        <Link to = "/"> Home</Link>
        <p></p>
        <Link to = "/otherpage"> Other Page</Link>
        <p></p>
    </header>
    <div>
          <Route exact path = "/" component = {Fib} />
          <Route path = "/otherpage" component = {OtherPage} />
     </div>
  </div></Router>
  );
}

export default App;

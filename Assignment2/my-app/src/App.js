
import './App.css';
import React from "react";
import Home from ".";
import {Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
    </Switch>
  );
}

export default App;

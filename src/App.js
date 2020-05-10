import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ColorsPage from './components/pages/Colors';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.colors = [];
  }
  render() {
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Route path='/' exact component={ColorsPage}></Route>
            <Route path='/single-color/:id' component={ColorsPage}></Route>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;

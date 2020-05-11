import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import ColorsPage from './components/pages/colors';
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
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className='switch-wrapper'>
            <Route path='/' exact component={ColorsPage}></Route>
            <Route path='/single-color/:id' component={ColorsPage}></Route>
          </AnimatedSwitch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;

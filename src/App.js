import React, { Component } from 'react';
import './App.css';
import routes from './routing/routes'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
          
          {routes}

      </div>
    );
  }
}

export default App;

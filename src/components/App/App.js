import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    const { data } = this.props;

    return (
      <div className="App">
        {data ? data : "Loading..." }
      </div>
    );
  }
}

export default App;

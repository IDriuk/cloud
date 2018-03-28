import React, { Component } from 'react';
import './App.css';

import Chart from '../Chart/Chart';

class App extends Component {

  render() {
    const { data } = this.props;

    return (
      <div className="App">
        {data ? data : "Loading..." }

        <Chart />

      </div>
    );
  }
}

export default App;

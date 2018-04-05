import React, { Component } from 'react';
import './App.css';

import PlatformBarContainer from '../../containers/PlatformBarContainer';
// import ChartContainer from '../../containers/ChartContainer';

class App extends Component {

  render() {

    return (
      <div className="p6n-vulcan-layout-main layout-column flex">

        <PlatformBarContainer />

        {/* <ChartContainer /> */}

      </div>
    );
  }
}

export default App;

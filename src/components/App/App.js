import React, { Component } from 'react';
import './App.css';

import PlatformBarContainer from '../../containers/PlatformBarContainer';
import NavPanel from '../NavPanel/NavPanel';
// import ChartContainer from '../../containers/ChartContainer';

class App extends Component {

  render() {

    return (
      <div className="p6n-vulcan-layout-main layout-column flex">

        <PlatformBarContainer />

        <div className="pan-shell-main-container layout-row flex">
          <div className="p6n-chrome layout-column">
            <div className="p6n-vulcan-content layout-row flex">
              <div className="pan-upgrade-panel-container-outer">

                <NavPanel />
                {/* MainContentPanel */}
                {/* <div className="pan-upgrade-panel pan-upgrade-panel-fill pan-upgrade-panel-open pan-upgrade-panel-color-white layout-row"></div> */}

              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './NavPanel.css';

class NavPanel extends Component {
  render () {
    return (
      <div
        className="pan-upgrade-panel pan-upgrade-panel-color-white pan-upgrade-panel-open"
        style={{width: 256}}
      ></div>
    );
  }
}

export default NavPanel;

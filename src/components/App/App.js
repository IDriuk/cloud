import React, { Component } from 'react';
import './App.css';

// import ChartContainer from '../../containers/ChartContainer';

// icons
import MenuIcon from '../../assets/icons/menu';
import ProjectIcon from '../../assets/icons/project';
import SearchIcon from '../../assets/icons/search';
import GiftIcon from '../../assets/icons/gift';
import DevShellIcon from '../../assets/icons/dev_shell';
import FeedBackIcon from '../../assets/icons/feedback';
import HelpIcon from '../../assets/icons/help';
import NotificationsIcon from '../../assets/icons/notifications';
import SettingsIcon from '../../assets/icons/settings';

// logos
import GoogleLogo from '../../assets/logos/google_logo.js';
import CloudConsoleLogo from '../../assets/logos/cloud_console_logo.js';

// images
import userPhoto from '../../assets/images/user_photo.jpg';

class App extends Component {

  render() {

    return (
      <div className="p6n-vulcan-layout-main layout-column flex">
        <div className="pan-shell-top-container layout-column flex-none">
          <header className="p6n-system-bar p6n-no-autofocus" style={{backgroundColor: 'rgb(59, 120, 231)'}}>
            <div className="p6n-platformbar-container p6n-prober-logo">
              <div className="p6n-platformbar-left">
                <button className="p6n-platformbar-colored-icon-container p6n-platformbar-button md-primary md-button md-platform-bar-theme md-ink-ripple md-icon-button">
                  <MenuIcon />
                </button>
                <a className="p6n-product-logo md-platform-bar-theme">
                  <div className="p6n-logo p6n-logo-theme-light">
                    <GoogleLogo />
                    <CloudConsoleLogo />
                  </div>
                </a>
                <div className="p6n-color-white p6n-project-switcher p6n-picker-wrapper">
                  <div className="p6n-dropdown-menu">
                    <a className="goog-flat-menu-button md-platform-bar-theme">
                      <ProjectIcon />
                      <span className="p6n-label p6n-project-switcher-project-name">idriukreact</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p6n-platformbar-middle">
                <div className="p6n-search-container">
                  <div className="p6n-search-bar p6n-color-white">
                    <span className="p6n-platformbar-utility">
                      <SearchIcon />
                    </span>
                    <input className="p6n-search-input"></input>
                  </div>
                </div>
              </div>
              <div className="p6n-platformbar-right">
                <div className="p6n-platformbar-left">
                  <button className="p6n-platformbar-colored-icon-container p6n-platformbar-button md-primary md-button md-platform-bar-theme md-ink-ripple md-icon-button">
                    <GiftIcon />
                  </button>
                  <button className="p6n-platformbar-colored-icon-container p6n-platformbar-button md-primary md-button md-platform-bar-theme md-ink-ripple md-icon-button">
                    <DevShellIcon />
                  </button>
                  <button className="p6n-platformbar-colored-icon-container p6n-platformbar-button md-primary md-button md-platform-bar-theme md-ink-ripple md-icon-button">
                    <FeedBackIcon />
                  </button>
                  <button className="p6n-platformbar-colored-icon-container p6n-platformbar-button md-primary md-button md-platform-bar-theme md-ink-ripple md-icon-button">
                    <HelpIcon />
                  </button>
                  <button className="p6n-platformbar-colored-icon-container p6n-platformbar-button md-primary md-button md-platform-bar-theme md-ink-ripple md-icon-button">
                    <NotificationsIcon />
                  </button>
                  <button className="p6n-platformbar-utility p6n-utilities-menu-icon md-icon-button md-primary md-button md-platform-bar-theme md-ink-ripple">
                    <SettingsIcon />
                  </button>
                </div>
                <div id="pcc-account-chooser-container">
                  <div className="cfc-accountchooser-dynamic">
                    <button className="cfc-accountchooser-link">
                      <img alt="user" src={userPhoto} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* <ChartContainer /> */}

      </div>
    );
  }
}

export default App;

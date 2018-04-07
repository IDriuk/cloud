import React, { Component } from 'react';
import './NavPanel.css';

class NavPanel extends Component {
  render () {
    return (
      <div
        className="pan-upgrade-panel pan-upgrade-panel-color-white pan-upgrade-panel-open"
        style={{width: 256}}
      >
        <div
          className="pan-upgrade-panel-content-wrapper pan-upgrade-panel-side-left"
          style={{minWidth: 256}}
        >
          <div className="pan-upgrade-panel-content">
            <a className="cfc-section-link">
              <div className="cfc-toolbar-tools">
                <div className="cfc-icon cfc-icon-COMPUTE_SECTION cfc-icon-size-large">
                  <span className="mat-icon ng-star-inserted">
                    <svg id="" fill="none" fill-rule="evenodd" height="100%" viewBox="0 0 32 32" width="100%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                      <path d="M1 9h4v3H1zm0 5h4v3H1zm0 5h4v3H1zM26 9h4v3h-4zm0 5h4v3h-4zm0 5h4v3h-4zM19 1h3v4h-3zm-5 0h3v4h-3zM9 1h3v4H9zm10 25h3v4h-3zm-5 0h3v4h-3zm-5 0h3v4H9z" fill="#616161"></path>
                      <path d="M5 5v21h21V5H5zm18 18H8V8h15v15z" fill="#757575"></path>
                      <path d="M11 11h9v9h-9z" fill="#757575"></path>
                      <path d="M20 20h-4.5v-4.5L20 11z" fill="#424242"></path>
                      <path d="M20 20h-9l4.5-4.5z" fill="#616161"></path>
                    </svg>
                  </span>
                </div>
                <h2 className="cfc-section-header">
                  <div className="cfc-section-name ng-star-inserted"> Compute Engine </div>
                </h2>
              </div>
            </a>

            {/* nav body */}
            <div className="cfc-section-nav-body ng-star-inserted">
              <div className="cfc-navigation-area ng-star-inserted">

                <div className="mat-list-item-content">
                  <a className="mat-button selected">
                    <span className="mat-button-wrapper">
                      <div className="cfc-section-highlight"></div>
                      <div className="cfc-icon cfc-icon-instance cfc-icon-size-small">
                        <span className="mat-icon ng-star-inserted">
                          <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M13.998 16A1.01 1.01 0 0 0 15 14.993V4.007C15 3 13.998 2 12.998 2H5.002C4.002 2 3 3 3 4.007v10.986C3 15.55 3.45 16 4.002 16H5.5l.5-1h6l.5 1h1.498zM6 9.5a.5.5 0 0 1 .49-.5h5.02a.5.5 0 0 1 0 1H6.49A.5.5 0 0 1 6 9.5zm0 2a.5.5 0 0 1 .49-.5h5.02a.5.5 0 0 1 0 1H6.49a.5.5 0 0 1-.49-.5zM8 6c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="cfc-page-displayName"> VM instances </span>
                    </span>
                  </a>
                </div>

                <div className="mat-list-item-content">
                  <a className="mat-button">
                    <span className="mat-button-wrapper">
                      <div className="cfc-section-highlight"></div>
                      <div className="cfc-icon cfc-icon-instance-group cfc-icon-size-small">
                        <span className="mat-icon ng-star-inserted">
                          <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M12 11h-2v3.993c0 .557.003 1.007.003 1.007h1l1-1h1.995l1 1h1L16 9.003c0-.55-.45-.996-.99-.996H13V10a1 1 0 1 1-1 1zm-7-1V8.007H2.99a.996.996 0 0 0-.99 1v5.986C2 15.55 2.002 16 2.002 16h1l1-1h1.996l1 1h1v-5H6a1 1 0 1 1-1-1zm6.998 0L12 3.003c0-.55-.45-.996-.99-.996H6.99a.996.996 0 0 0-.99 1v5.986C6 9.55 6.002 10 6.002 10h1l1-1h1.996l1 1h1zM9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="cfc-page-displayName"> Instance groups </span>
                    </span>
                  </a>
                </div>

                <div className="mat-list-item-content">
                  <a className="mat-button">
                    <span className="mat-button-wrapper">
                      <div className="cfc-section-highlight"></div>
                      <div className="cfc-icon cfc-icon-instance-template cfc-icon-size-small">
                        <span className="mat-icon ng-star-inserted">
                          <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M13.998 16A1.01 1.01 0 0 0 15 14.993V4.007C15 3 13.998 2 12.998 2H5.002C4.002 2 3 3 3 4.007v10.986C3 15.55 3.45 16 4.002 16H5.5l.5-1h6l.5 1h1.498zM5 4h8v9H5V4zm1 5.5a.5.5 0 0 1 .49-.5h5.02a.5.5 0 0 1 0 1H6.49A.5.5 0 0 1 6 9.5zM8 5h2v2H8V5zm-2 6.5a.5.5 0 0 1 .49-.5h5.02a.5.5 0 0 1 0 1H6.49a.5.5 0 0 1-.49-.5z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="cfc-page-displayName"> Instance templates </span>
                    </span>
                  </a>
                </div>

                <div className="mat-list-item-content">
                  <a className="mat-button">
                    <span className="mat-button-wrapper">
                      <div className="cfc-section-highlight"></div>
                      <div className="cfc-icon cfc-icon-instance-disk  cfc-icon-size-small">
                        <span className="mat-icon ng-star-inserted">
                          <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M3 3.007A1.01 1.01 0 0 1 4.002 2h9.996C14.55 2 15 2.45 15 3.007v11.986A1.01 1.01 0 0 1 13.998 16H4.002C3.45 16 3 15.55 3 14.993V3.007zM9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-3 1.5a.5.5 0 0 1 .49-.5h5.02a.5.5 0 0 1 0 1H6.49a.5.5 0 0 1-.49-.5zM9 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="cfc-page-displayName"> Disks </span>
                    </span>
                  </a>
                </div>

                <div className="mat-list-item-content">
                  <a className="mat-button">
                    <span className="mat-button-wrapper">
                      <div className="cfc-section-highlight"></div>
                      <div className="cfc-icon cfc-icon-instance-snapshot   cfc-icon-size-small">
                        <span className="mat-icon ng-star-inserted">
                          <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 3.007A1.01 1.01 0 0 1 4.002 2h9.996C14.55 2 15 2.45 15 3.007v11.986A1.01 1.01 0 0 1 13.998 16H4.002C3.45 16 3 15.55 3 14.993V3.007zM5 4h8v10H5V4zm1 8.5a.5.5 0 0 1 .49-.5h5.02a.5.5 0 0 1 0 1H6.49a.5.5 0 0 1-.49-.5zM9 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="cfc-page-displayName">  Snapshots  </span>
                    </span>
                  </a>
                </div>

                <div className="mat-list-item-content">
                  <a className="mat-button">
                    <span className="mat-button-wrapper">
                      <div className="cfc-section-highlight"></div>
                      <div className="cfc-icon cfc-icon-instance-image cfc-icon-size-small">
                        <span className="mat-icon ng-star-inserted">
                          <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M6 4H4v10h2v2h6v-2h2V4h-2V2H6v2zM2 2h14v14H2V2zm3 3h2v3H5V5zm6 5h2v3h-2v-3zM8 5h5v3H8V5zm2 1h1v1h-1V6zm-5 4h5v3H5v-3zm2 1h1v1H7v-1z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="cfc-page-displayName"> Images </span>
                    </span>
                  </a>
                </div>

                <div className="mat-list-item-content">
                  <a className="mat-button">
                    <span className="mat-button-wrapper">
                      <div className="cfc-section-highlight"></div>
                      <div className="cfc-icon cfc-icon-instance-tpu cfc-icon-size-small">
                        <span className="mat-icon ng-star-inserted">
                          <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M4.654 11.163L3 12.817v-3.66l3.15-3.15 8.85 8.85v.618c0 .566-.465 1.025-1.022 1.025H12.45l-.42-1.492H6.01L5.55 16.5H4.02A1.023 1.023 0 0 1 3 15.475v-1.067l2.495-2.495a1.5 1.5 0 1 0-.84-.75zm6.84-4.5a1.497 1.497 0 0 0 1.218-.093L15 8.858v4.41L9.945 8.21l1.55-1.55zm-.84-.75L9.15 7.417 4.203 2.47c.264-.14.552-.22.84-.22h7.915C13.978 2.25 15 3.268 15 4.293v2.974L13.432 5.7A1.5 1.5 0 0 0 12 3.75a1.5 1.5 0 0 0-1.346 2.163zM3 7.567V4.293c0-.376.137-.75.36-1.074l1.995 1.99L3 7.562z"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="cfc-page-displayName"> TPUs </span>
                    </span>
                  </a>
                </div>

                <div className="mat-list-item-content">
                  <a className="mat-button">
                    <span className="mat-button-wrapper">
                      <div className="cfc-section-highlight"></div>
                      <div className="cfc-icon cfc-icon-instance-use-discounts cfc-icon-size-small">
                        <span className="mat-icon ng-star-inserted">
                          <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M16.997 7.27L17 4a1 1 0 0 0-1-1H2c-.552 0-1 .456-1 1.002v3.266a2 2 0 0 1 0 3.464v3.266A1 1 0 0 0 2 15h13.992c.553 0 1-.456 1-1.002l.003-3.268a2 2 0 0 1 .002-3.46zM6 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1.225-7l.866.5-4.37 7.578-.863-.5L10.777 5z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="cfc-page-displayName"> Committed use discounts </span>
                    </span>
                  </a>
                </div>

                <div className="mat-list-item-content">
                  <a className="mat-button">
                    <span className="mat-button-wrapper">
                      <div className="cfc-section-highlight"></div>
                      <div className="cfc-icon cfc-icon-instance-metadata cfc-icon-size-small">
                        <span className="mat-icon ng-star-inserted">
                          <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M2 2h6v2H2V2zm0 4h6v2H2V6zm0 4h6v2H2v-2zm0 4h6v2H2v-2zm8-12h6v2h-6V2zm0 4h6v2h-6V6zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="cfc-page-displayName"> Metadata </span>
                    </span>
                  </a>
                </div>

                <div className="mat-list-item-content">
                  <a className="mat-button">
                    <span className="mat-button-wrapper">
                      <div className="cfc-section-highlight"></div>
                      <div className="cfc-icon cfc-icon-instance-health-check-new cfc-icon-size-small">
                        <span className="mat-icon ng-star-inserted">
                          <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M8 12H6v-2h2V8h2v2h2v2h-2v2H8v-2zM5 6V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h1.993C15.55 6 16 6.456 16 6.995v8.01a1 1 0 0 1-1.007.995H3.007A1.008 1.008 0 0 1 2 15.005v-8.01A1 1 0 0 1 3.007 6H5zm2 0h4V4H7v2z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="cfc-page-displayName"> Health checks </span>
                    </span>
                  </a>
                </div>

                <div className="mat-list-item-content">
                  <a className="mat-button">
                    <span className="mat-button-wrapper">
                      <div className="cfc-section-highlight"></div>
                      <div className="cfc-icon cfc-icon-instance-zones cfc-icon-size-small">
                        <span className="mat-icon ng-star-inserted">
                          <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M10 8V2H2v8h6v6h8V8h-6zM4 4h4v4H4V4zm6 6h4v4h-4v-4zm-8 1h2v2H2v-2zm0 3h2v2H2v-2zM14 2h2v2h-2V2zm-3 0h2v2h-2V2zm3 3h2v2h-2V5zm-9 9h2v2H5v-2z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="cfc-page-displayName"> Zones </span>
                    </span>
                  </a>
                </div>

                <div className="mat-list-item-content">
                  <a className="mat-button">
                    <span className="mat-button-wrapper">
                      <div className="cfc-section-highlight"></div>
                      <div className="cfc-icon cfc-icon-instance-history cfc-icon-size-small">
                        <span className="mat-icon ng-star-inserted">
                          <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0zm-6.956 5.512a5.47 5.47 0 1 0 0-10.937 5.47 5.47 0 0 0 0 10.938zM10 8.586V5H8v4.466h.05l2.718 2.716 1.414-1.414L10 8.586z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="cfc-page-displayName"> Operations </span>
                    </span>
                  </a>
                </div>

                <div className="mat-list-item-content">
                  <a className="mat-button">
                    <span className="mat-button-wrapper">
                      <div className="cfc-section-highlight"></div>
                      <div className="cfc-icon cfc-icon-instance-quotas cfc-icon-size-small">
                        <span className="mat-icon ng-star-inserted">
                          <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M16 4.503v9.49A2.005 2.005 0 0 1 13.994 16H4.006A2.005 2.005 0 0 1 2 13.994v-9.49V5h2v9h10V5h2v-.497zM5 8h8v5H5V8zm0-6h2v2H5V2zm3 0h2v2H8V2zm3 0h2v2h-2V2zm3 0h2v3h-2V2zM2 2h2v3H2V2z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="cfc-page-displayName"> Quotas </span>
                    </span>
                  </a>
                </div>

                <div className="mat-list-item-content">
                  <a className="mat-button">
                    <span className="mat-button-wrapper">
                      <div className="cfc-section-highlight"></div>
                      <div className="cfc-icon cfc-icon-instance-settings cfc-icon-size-small">
                        <span className="mat-icon ng-star-inserted">
                          <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M14.348 9.686c.03-.224.05-.448.05-.686 0-.238-.02-.462-.05-.686l1.52-1.155a.35.35 0 0 0 .086-.45l-1.44-2.42a.367.367 0 0 0-.44-.16l-1.79.7a5.293 5.293 0 0 0-1.217-.69l-.274-1.86A.348.348 0 0 0 10.44 2H7.562a.348.348 0 0 0-.352.294L6.936 4.15a5.57 5.57 0 0 0-1.216.686l-1.792-.7a.356.356 0 0 0-.44.153L2.05 6.71a.34.34 0 0 0 .086.45l1.52 1.154A5.36 5.36 0 0 0 3.603 9c0 .23.02.462.05.686L2.137 10.84a.347.347 0 0 0-.086.45l1.44 2.42c.09.155.28.21.44.155l1.79-.7c.38.28.78.51 1.22.686l.28 1.86a.35.35 0 0 0 .356.3h2.878a.35.35 0 0 0 .355-.29l.274-1.855a5.57 5.57 0 0 0 1.216-.686l1.79.7a.36.36 0 0 0 .44-.154l1.44-2.42a.35.35 0 0 0-.09-.45l-1.52-1.16zM9 11c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="cfc-page-displayName"> Settings </span>
                    </span>
                  </a>
                </div>

              </div>
            </div>

            {/* custom footer */}
            <div className="ng-star-inserted cfc-custom-footer">
              <div className="ng-star-inserted">
                <div className="mp-cameo-ui-treatment-1 ng-star-inserted">
                  <a className="mat-button cfc-disable-user-select-on-touch-device">
                    <span className="mat-button-wrapper">
                      <span className="mp-cameo-footer-text">
                        Cloud Launcher
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* collapse button */}
            <div className="cfc-toolbar-tools">
              <button className="mat-icon-button">
                <span className="mat-button-wrapper">
                  <div className="cfc-icon cfc-icon-collapse cfc-icon-size-small">
                    <span className="mat-icon ng-star-inserted">
                      <svg id="" width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                        <path d="M5.46 8.846l3.444-3.442-1.058-1.058-4.5 4.5 4.5 4.5 1.058-1.057L5.46 8.84zm7.194 4.5v-9h-1.5v9h1.5z" fill-rule="evenodd"></path>
                      </svg>
                    </span>
                  </div>
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default NavPanel;

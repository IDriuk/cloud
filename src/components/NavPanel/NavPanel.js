import React, { Component } from 'react';
import './NavPanel.css';

// icons
import ComputeSectionIcon from '../../assets/icons/compute_section';
import InstanceIcon from '../../assets/icons/instance';
import GroupIcon from '../../assets/icons/group';
import TemplateIcon from '../../assets/icons/template';
import DiskIcon from '../../assets/icons/disk';
import SnapshotIcon from '../../assets/icons/snapshot';
import ImageIcon from '../../assets/icons/image';
import TpuIcon from '../../assets/icons/tpu';
import UseDiscountsIcon from '../../assets/icons/use_discounts';
import MetadataIcon from '../../assets/icons/metadata';
import HealthCheckNewIcon from '../../assets/icons/health_check_new';
import ZonesIcon from '../../assets/icons/zones';
import HistoryIcon from '../../assets/icons/history';
import QuotasIcon from '../../assets/icons/quotas';
import SettingsIcon from '../../assets/icons/nav_settings';

const NavPanelItems = [
  {className: "instance", displayName: "VM instances", Icon: InstanceIcon},
  {className: "group", displayName: "Instance groups", Icon: GroupIcon},
  {className: "template", displayName: "Instance templates", Icon: TemplateIcon},
  {className: "disk", displayName: "Disks", Icon: DiskIcon},
  {className: "snapshot", displayName: "Snapshots", Icon: SnapshotIcon},
  {className: "image", displayName: "Images", Icon: ImageIcon},
  {className: "tpu", displayName: "TPUs", Icon: TpuIcon},
  {className: "use-discounts", displayName: "Committed use discounts", Icon: UseDiscountsIcon},
  {className: "metadata", displayName: "Metadata", Icon: MetadataIcon},
  {className: "health-check-new", displayName: "Health checks", Icon: HealthCheckNewIcon},
  {className: "zones", displayName: "Zones", Icon: ZonesIcon},
  {className: "history", displayName: "Operations", Icon: HistoryIcon},
  {className: "quotas", displayName: "Quotas", Icon: QuotasIcon},
  {className: "settings", displayName: "Settings", Icon: SettingsIcon}
];

class NavPanel extends Component {

  renderItem ( item, index ) {
    const selected = index === 0 ? "selected" : "";
    const { name, displayName, Icon } = item;

    return (
      <div key={index} className="mat-list-item-content">
        <a className={`mat-button ${selected}`}>
          <span className="mat-button-wrapper">
            <div className="cfc-section-highlight"></div>
            <div className={`cfc-icon cfc-icon-${name} cfc-icon-size-small`}>
              <span className="mat-icon ng-star-inserted">
                <Icon />
              </span>
            </div>
            <span className="cfc-page-displayName"> {displayName} </span>
          </span>
        </a>
      </div>
    );
  }

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
                    <ComputeSectionIcon />
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

                {NavPanelItems.map(this.renderItem)}

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
                        <path d="M5.46 8.846l3.444-3.442-1.058-1.058-4.5 4.5 4.5 4.5 1.058-1.057L5.46 8.84zm7.194 4.5v-9h-1.5v9h1.5z" fillRule="evenodd"></path>
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

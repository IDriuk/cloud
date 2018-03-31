import React, { Component } from 'react';
import './Chart.css';

class Chart extends Component {

  render() {
    const { data } = this.props;

    if (!data) return <div> Loading... </div>

    const { coordinates } = data;

    let M = coordinates.splice(0, 1)[0];
    const d = coordinates.reduce((acc, {x, y}) => `${acc}L${x},${y}`, `M${M.x},${M.y}` );

    const { x, y } = coordinates[222];

    return (
      <div className="Chart">
        <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="200">
          <g >
              <g >
                <path fill="none" strokeWidth="1" stroke="#4D90FE" d={d} >
                </path>
              </g>
              <g>
                <circle cx={x} cy={y} fill="#4D90FE" r={4} ></circle>
              </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default Chart;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Chart.css';

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = { dotIndex: 0 };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);

  }

  onMouseMove({ clientX, clientY }) {
    const { data: { coordinates }} = this.props;
    const { rect: { x }, dotIndex } = this.state;
    const currentX = clientX - x - 20 /* maybe padding in css */ ;
    const index = coordinates.findIndex((c) => c.x > currentX);
    if ( index !== dotIndex && index >= 0 && index < coordinates.length - 1 ) this.setState({ dotIndex: index });
  }

  onMouseEnter(event) {
    const svgNode = ReactDOM.findDOMNode(this.svgNode);
    const rect = svgNode.getBoundingClientRect()
    svgNode.addEventListener('mousemove', this.onMouseMove);
    this.setState({ rect });
  }

  onMouseLeave(event) {
    const svgNode = ReactDOM.findDOMNode(this.svgNode);
    svgNode.removeEventListener('mousemove', this.onMouseMove);
  }

  render() {
    const { data } = this.props;
    const { dotIndex } = this.state;
    if (!data) return <div> Loading... </div>

    const coordinates = [...data.coordinates];

    let M = coordinates.splice(0, 1)[0];
    const d = coordinates.reduce((acc, {x, y}) => `${acc}L${x},${y}`, `M${M.x},${M.y}` );

    const { x, y } = coordinates[dotIndex];

    return (
      <div className="Chart">
        <svg
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          ref={node => { this.svgNode = node; }}
          xmlns="http://www.w3.org/2000/svg" width="1024" height="200">
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

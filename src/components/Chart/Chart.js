import React from 'react';

export default ({ data }) => {

  let d;

  if (data) {
    const { coordinates } = data;
    let M = coordinates.splice(0, 1)[0];
    console.log(M);
    d = coordinates.reduce((acc, {x, y}) => `${acc}L${x},${y}`, `M${M.x},${M.y}` );
    console.log(d);
  }

  return (
    <div>
      {!data ? "Loading..." :
      <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="200">
        <g >
          <g >
            <g >
              <path fill="none" strokeWidth="1" stroke="#4D90FE" d={d} >
              </path>
            </g>
          </g>
        </g>
      </svg>}
    </div>
  );
}
/*  */

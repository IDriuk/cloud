import React from 'react';
import ReactDOM from 'react-dom';
import PlatformBar from './PlatformBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlatformBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import NavPanel from './NavPanel';

test('renders without crashes', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});

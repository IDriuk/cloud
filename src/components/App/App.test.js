import React from 'react';
import App from './App';
import { configure, shallow, mount, render  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it('renders without crashing', () => {
  configure({ adapter: new Adapter() });
  const wrapper = shallow(<App/>);
});

import React from 'react';
import { shallow } from "enzyme";
import App from '../App';

it('renders the <App /> without crashing', () => {
  shallow(<App />);
});

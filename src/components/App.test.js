import React from 'react';
import App from './App';

const wrapper = shallow(<App />);
describe('(Component) App', () => {

  it('match the snapshot', () => {
    const wrapper = renderer.create(<App />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should inject the Router component', () => {
    expect(wrapper.find('.container').length).toBe(1);
  });
});
import React from 'react';
import Home from './Home';

const wrapper = render(<Home />);

describe('Home (Component)', () => {
  it('should render the Boilerplate title', () => {
    expect(wrapper.find('.display-6').html()).toContain('Boilerplate');
  });
});
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Cart from './index';
import * from '../../context/';

const value = jest.fn();
const wrapper = render(<FeTestSbStore.Provider value={value}><Cart /></FeTestSbStore.Provider>);

describe('Cart (Component)', () => {
  it('should render the cart title', () => {
    expect(wrapper.find('display-6').html()).toContain('Cart');
  });
});
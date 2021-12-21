import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import assert from 'assert';
import Screen from '../screens';

describe('The component rendered', () => {

  const wrapper = shallow(<Screen />);

  it('renders the Screen component without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain one timer component', () => {
    assert.equal(wrapper.find('Timer').length === 1, true);
  });

  it('should contain one typing component', () => {
    assert.equal(wrapper.find('Typing').length === 1, true);
  });
});
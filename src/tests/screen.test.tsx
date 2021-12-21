import React from 'react';
import "@testing-library/jest-dom";
import { shallow } from 'enzyme';

import Screen from '../screens';
import assert from 'assert';

describe("The component rendered", () => {

  const wrapper = shallow(<Screen />);

  it('renders the Screen component without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain one timer component', () => {
    assert.equal(wrapper.find('Timer').length === 1, true);
  });

  it('should contain one typing component', () => {
    assert.equal(wrapper.find('Typing').length === 1, true);
  })
});
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import assert from 'assert';
import Typing from '../components/typing';

describe('The component rendered', () => {

  it('renders the Typing component without crashing', () => {
    const disableUserInput = false;
    const showResult = false;
    const wrapper = shallow(<Typing 
      disableUserInput={disableUserInput}
      showResult={showResult}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
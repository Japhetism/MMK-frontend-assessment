import React from 'react';
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';
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

  it('should renders two textareas', () => {
    const disableUserInput = true;
    const showResult = false;
    const wrapper = mount(<Typing 
      disableUserInput={disableUserInput}
      showResult={showResult}
    />);
    assert.equal(wrapper.find('textarea').length === 2, true);
  });

  it('should not contain result screen', () => {
    const disableUserInput = false;
    const showResult = false;
    const wrapper = mount(<Typing 
      disableUserInput={disableUserInput}
      showResult={showResult}
    />);
    assert.equal(wrapper.find('TypingResult').length === 0, true);
  });

  it('should contain result screen', () => {
    const disableUserInput = false;
    const showResult = true;
    const wrapper = mount(<Typing 
      disableUserInput={disableUserInput}
      showResult={showResult}
    />);
    assert.equal(wrapper.find('TypingResult').length === 1, true);
  });
});
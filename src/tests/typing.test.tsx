import React from 'react';
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';
import assert from 'assert';
import Typing from '../components/typing';

describe('The component rendered', () => {

  const disableUserInput = false;
  const enableUserInput = true;
  const showResult = true;
  const hideResult = false;

  it('renders the Typing component without crashing', () => {
    const wrapper = shallow(<Typing 
      disableUserInput={disableUserInput}
      showResult={hideResult}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should renders two textareas', () => {
    const wrapper = mount(<Typing 
      disableUserInput={enableUserInput}
      showResult={hideResult}
    />);
    assert.equal(wrapper.find('textarea').length === 2, true);
  });

  it('should not contain result screen', () => {
    const wrapper = mount(<Typing 
      disableUserInput={disableUserInput}
      showResult={hideResult}
    />);
    assert.equal(wrapper.find('TypingResult').length === 0, true);
  });

  it('should contain result screen', () => {
    const wrapper = mount(<Typing 
      disableUserInput={disableUserInput}
      showResult={showResult}
    />);
    assert.equal(wrapper.find('TypingResult').length === 1, true);
  });
});
import React from 'react';
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';
import assert from 'assert';
import Timer from '../components/timer';

describe('The component rendered', () => {

  it('renders the Timer component without crashing', () => {
    const durationOptions = [1,2,3,4,5];
    const setDisableUserInput = () => {};
    const setShowResult = () => {};
    const wrapper = shallow(<Timer
        durationOptions={durationOptions}
        setDisableUserInput={setDisableUserInput}
        setShowResult={setShowResult}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('props are valid and defined', () => {
    const durationOptions = [1,2,3,4,5];
    const setDisableUserInput = () => {};
    const setShowResult = () => {};
    const wrapper = mount(<Timer
      durationOptions={durationOptions}
      setDisableUserInput={setDisableUserInput}
      setShowResult={setShowResult}
    />);
    expect(wrapper.props().durationOptions).toEqual([1,2,3,4,5]);
    expect(wrapper.props().durationOptions).not.toBeUndefined();
  });

  it('should renders a single button', () => {
    const durationOptions = [1,2,3,4,5];
    const setDisableUserInput = () => {};
    const setShowResult = () => {};
    const wrapper = mount(<Timer
      durationOptions={durationOptions}
      setDisableUserInput={setDisableUserInput}
      setShowResult={setShowResult}
    />);
    assert.equal(wrapper.find('button').length === 1, true);
  });
})
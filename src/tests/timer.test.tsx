import React from 'react';
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';
import assert from 'assert';
import Timer from '../components/timer';

describe('The component rendered', () => {
    const durationOptions = [1,2,3,4,5];
    const setDisableUserInput = () => {};
    const setShowResult = () => {};

    const mountedWrapper = mount(<Timer
      durationOptions={durationOptions}
      setDisableUserInput={setDisableUserInput}
      setShowResult={setShowResult}
    />);

    const shallowWrapper = shallow(<Timer
      durationOptions={durationOptions}
      setDisableUserInput={setDisableUserInput}
      setShowResult={setShowResult}
    />);

  it('renders the Timer component without crashing', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  it('props are valid and defined', () => {
    expect(mountedWrapper.props().durationOptions).toEqual([1,2,3,4,5]);
    expect(mountedWrapper.props().durationOptions).not.toBeUndefined();
  });

  it('should renders a single button', () => {
    assert.equal(mountedWrapper.find('button').length === 1, true);
  });

  it('should contain a duration selector', () => {
    assert.equal(mountedWrapper.find('DurationSelector').length === 1, true);
  });

  it('should renders a display for count down timer', () => {
    assert.equal(mountedWrapper.find('CountdownTimer').length === 1, true);
  });
})
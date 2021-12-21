import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
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
})
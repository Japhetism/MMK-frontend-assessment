import React, {useState} from 'react';
import Timer from '../components/timer';
import Typing from '../components/typing';
import {
  Grid,
  Section
} from '../components/styles';

const Screen = () => {
  const [disableUserInput, setDisableUserInput] = useState(true);
  const [showResult, setShowResult] = useState(false);
  return <Grid>
    <Section>
      <Timer 
        durationOptions={[1,2,3,4,5]}
        setDisableUserInput={setDisableUserInput}
        setShowResult={setShowResult}
      />
    </Section>
    <Section>
      <Typing 
        disableUserInput={disableUserInput}
        showResult={showResult}
      />
    </Section>
  </Grid>
}

export default Screen;

import React from 'react';
import Timer from '../components/timer';
import Typing from '../components/typing';
import {
  Grid,
  Section
} from '../components/styles';

const Screen = () => {
  return <Grid>
    <Section>
      <Timer 
        durationOptions={[1,2,3,4,5]}
      />
    </Section>
    <Section>
      <Typing />
    </Section>
  </Grid>
}

export default Screen;

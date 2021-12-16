import React, {Fragment} from 'react';
import Timer from './components/timer';
import Typing from './components/typing';

function App() {
  return <Fragment>
    <Timer 
      durationOptions={[1,2,3,4,5]}
    />
    <Typing />
  </Fragment>
}

export default App;

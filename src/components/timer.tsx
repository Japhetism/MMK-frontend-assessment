import React, {FC, useState, Fragment, useEffect} from 'react';
import {
  DurationWrapper,
  Item,
  RadioButtonLabel,
  RadioButton,
  Input,
  Text,
  Button,
  Wrapper
} from './styles';

interface CountdownTimerProps {
  minutes: number,
  seconds: number
}

interface DurationSelectorProps {
  durationOptions: Array<number>,
  minutes: number,
  canStartTimer: boolean,
  timerAction: string,
  setCanStartTimer: (startTimer:boolean) => void
  setMinutes: (minute:number) => void
}

interface TimerProps {
  durationOptions: Array<number>
  setDisableUserInput: (disableUserInput:boolean) => void
  setShowResult: (showResult:boolean) => void
}

const CountdownTimer: FC<CountdownTimerProps> = ({minutes, seconds}) => {
  return <Fragment>
    <Text>{`${minutes} min : ${seconds} sec`}</Text>
  </Fragment>
}

const DurationSelector: FC<DurationSelectorProps> = ({
  durationOptions, 
  timerAction,  
  setMinutes, 
  canStartTimer, 
  setCanStartTimer,
  minutes
}) => {
  return <DurationWrapper>
    {durationOptions.map((duration:number) => (
      <Item key={duration}>
        <RadioButton
          type="radio"
          name="radio"
          value={duration}
          onChange={event => setMinutes(parseInt(event.target.value))}
        />
        <RadioButtonLabel />
        <div>{duration} min</div>
      </Item>
    ))}
    <Input 
      type="number" 
      min="1"
      max="60"
      placeholder="Custom Time"
      onChange={event => setMinutes(parseInt(event.target.value))}
    />
    <Button
      disabled={minutes > 0 ? false : true}
      onClick={() => setCanStartTimer(!canStartTimer)}
    >
      {timerAction}
    </Button>
  </DurationWrapper>
}

const Timer: FC<TimerProps> = ({
  durationOptions,
  setDisableUserInput,
  setShowResult
}) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [canStartTimer, setCanStartTimer] = useState(false);
  const [timerAction, setTimerAction] = useState("Start");
  
  const updateSeconds = () => {
    setShowResult(false);
    if (minutes === 0 && seconds === 0) {
      setSeconds(0);
      setMinutes(0);
      setTimerAction("Start");
      setCanStartTimer(false);
      setDisableUserInput(true);
      setShowResult(true);
    } else {
      if (seconds === 0) {
        setMinutes(minutes => minutes - 1);
        setSeconds(59);
        setTimerAction("In Progress...")
        setDisableUserInput(false);
      } else {
        setSeconds(seconds => seconds - 1);
        setTimerAction("In Progress...")
        setDisableUserInput(false);
      }
    }
  }

  useEffect(() => {
    if (canStartTimer) {
      const token = setTimeout(updateSeconds, 1000);
      return function cleanUp() {
        clearTimeout(token);
      }
    }
  })

  return <Wrapper>
    <CountdownTimer 
      minutes={minutes}
      seconds={seconds}
    />
    <DurationSelector 
      durationOptions={durationOptions}
      minutes={minutes}
      setMinutes={setMinutes}
      setCanStartTimer={setCanStartTimer}
      canStartTimer={canStartTimer}
      timerAction={timerAction}
    />
  </Wrapper>
}

export default Timer;
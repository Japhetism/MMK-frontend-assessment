import React, {FC, useState} from 'react';
import {
  Item,
  RadioButtonLabel,
  RadioButton,
  StyledTextarea,
  Wrapper,
  Section,
  StyledTable,
  H2
} from './styles';
import { generateSentence, generateResult } from '../utils/helper';

interface TypingProps {
  disableUserInput: boolean,
  showResult: boolean,
}

interface TypingResultProps {
  text: string,
  userInput: string
}

const TypingResult: FC<TypingResultProps> = ({
  text,
  userInput
}) => {
  
  const {accuracy, correctWords, wrongWords} = generateResult(text, userInput);

  return <Section>
    <H2>Your Result:</H2>
    <StyledTable>
      <tbody>
        <tr>
          <td>Accuracy</td>
          <td>{accuracy}%</td>
        </tr>
        <tr>
          <td>Correct Words</td>
          <td>{correctWords}</td>
        </tr>
        <tr>
          <td>Wrong Words</td>
          <td>{wrongWords}</td>
        </tr>
      </tbody>
    </StyledTable>
  </Section>
}

const Typing: FC<TypingProps> = ({
  disableUserInput,
  showResult
}) => {
  const [autoGenerateText, setAutoGenerateText] = useState(false);
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");

  const handleAutogenerateText = () => {
    const shouldGenerateText = !autoGenerateText;
    if (shouldGenerateText) {
      setText(generateSentence());
    } else {
      setText("");
    }
    setAutoGenerateText(shouldGenerateText);
  }

  return <Wrapper>
    <Item>
      <RadioButton
        type="checkbox"
        name="autogeneratetext"
        onChange={event => handleAutogenerateText()}
      />
      <RadioButtonLabel />
      <div>Autogenerate Text</div>
    </Item>
    <StyledTextarea 
      value={text} 
      onChange={event => setText(event.target.value)}
    />
    <StyledTextarea 
      disabled={disableUserInput}
      onChange={event => setUserInput(event.target.value)}
    />
    {showResult ? 
      <TypingResult
        text={text}
        userInput={userInput} 
      /> 
    : null}
  </Wrapper>
}

export default Typing;

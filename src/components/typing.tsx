import React, {useState} from 'react';
import {
  Item,
  RadioButtonLabel,
  RadioButton,
  StyledTextarea,
  Wrapper
} from './styles';
import { generateSentence } from '../utils/helper';

const Typing = () => {
  const [autoGenerateText, setAutoGenerateText] = useState(false);
  const [text, setText] = useState("");

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
    <StyledTextarea />
  </Wrapper>
}

export default Typing;

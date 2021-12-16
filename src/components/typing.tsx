import React, {useState, Fragment} from 'react';
import {
  Item,
  RadioButtonLabel,
  RadioButton,
  StyledTextarea,
  Wrapper
} from './styles';

const Typing = () => {
  const [autoGenerateText, setAutoGenerateText] = useState(false);
  const [text, setText] = useState("");
  return <Wrapper>
    <Item>
      <RadioButton
        type="checkbox"
        name="autogeneratetext"
        onChange={event => setAutoGenerateText(!autoGenerateText)}
      />
      <RadioButtonLabel />
      <div>Autogenerate Text</div>
    </Item>
    <StyledTextarea/>
    <StyledTextarea />
  </Wrapper>
}

export default Typing;

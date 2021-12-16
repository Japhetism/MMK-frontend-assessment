import styled from 'styled-components';

const DurationWrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${Item} {
    background: yellowgreen;
    border: 2px solid yellowgreen;
  }
  &:checked + ${RadioButtonLabel} {
    background: yellowgreen;
    border: 1px solid yellowgreen;
    &::after {
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  width: 150px;
  background: yellowgreen;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const Text = styled.span`
  color: red;
  text-align: left;
  font-size: 30px;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Wrapper = styled.div`
  margin: 30px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content content content"
    "sidebar footer footer footer";
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content"
      "footer";
  }
`;

const Section = styled.div`
  display: flex
  justify-content: center
  padding: .5rem
`;

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  caption-side: bottom;
  td,
  th {
    border: none;
  }
  td {
    padding: 5px 20px;
    width: 50%;
    :nth-of-type(even) {
      text-align: right;
    }
  }
  tbody tr {
    height: 50px;
    font-size: 20px;
    :nth-of-type(odd) {
      background-color: #efefef;
    }
  }
`;

const H2 = styled.h2``;

export {
  DurationWrapper,
  Item,
  RadioButtonLabel,
  RadioButton,
  Input,
  Text,
  Button,
  StyledTextarea,
  Wrapper,
  Grid,
  Section,
  StyledTable,
  H2
}
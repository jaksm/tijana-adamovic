import styled from "styled-components";
import theme from "../theme";

const Input = styled.input`
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: ${theme.shadow.base};
  font-family: "Poppins", sans-serif;
  font-size: ${theme.font.size.sm};
  padding: 1.25em;
  box-sizing: border-box;
  margin: 0.5rem 0;
  width: 100%;
  /* cursor: pointer; */
`;

export default Input;

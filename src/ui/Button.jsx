import styled from "styled-components";
import theme from "../theme";

const Button = styled.button`
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: ${theme.shadow.base};
  font-size: ${theme.font.size.sm};
  padding: 1.25em;
  box-sizing: border-box;
  margin: 0.5rem 0;
  background-color: ${({ background }) => (background ? background : theme.color.green)};
  color: ${({ color }) => (color ? color : theme.color.white)};
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ background }) => (background ? background : theme.color.grey)};
  }
`;

export default Button;

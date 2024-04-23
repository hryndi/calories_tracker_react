import styled from "@emotion/styled";

const Button = styled.button`
  border-radius: 10px;
  border: 0;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.15) 3px 2.4px 2.6px;
  transition: 0.067s;
  box-sizing: border-box;
  &:hover {
    outline: black 1px solid;
  }
  &:active {
    opacity: 0.7;
    box-shadow: rgba(0, 0, 0, 0.15) 2px 1px 1px;
  }
  &.width-100 {
    width: 100%;
  }
  &.green {
    background-color: #4fff4f;
  }
  &.red {
    background-color: #ff3f3f;
  }
`;

export default Button;

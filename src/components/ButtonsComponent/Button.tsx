import styled from "@emotion/styled";
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  flex: 1 1 0;
  min-width: 0;
  font-size: 1.1rem;
  font-weight: 500;
  transition: 0.067s;
  box-sizing: border-box;
  color: #0a1d5d;

  &:hover {
    -webkit-filter: brightness(90%);
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

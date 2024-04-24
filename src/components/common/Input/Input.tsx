import styled from "@emotion/styled";

const Input = styled.input`
  padding: 0.7rem;
  font-size: 1.2rem;
  border-radius: 13px;
  border: gray 1px solid;
  width: auto;
  &:focus-visible {
    outline: 2px #0a1d5d solid !important;
  }
`;

export default Input;

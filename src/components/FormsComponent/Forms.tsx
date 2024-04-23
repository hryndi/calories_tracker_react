import styled from "@emotion/styled";
import { FC } from "react";
import Input from "../common/Input/Input";

const InputWrapp = styled.div`
  display: grid;

  gap: 0.5rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }
`;

interface FormsProps {
  itemMap: Array<React.InputHTMLAttributes<HTMLInputElement>>;
}

const Forms: FC<FormsProps> = ({ itemMap }) => {
  return (
    <InputWrapp>
      {itemMap.map((item) => (
        <Input {...item} />
      ))}
    </InputWrapp>
  );
};

export default Forms;

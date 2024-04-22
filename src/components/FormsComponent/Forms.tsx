import styled from "@emotion/styled";
import { FC } from "react";
import Input from "../common/Input/Input";

const InputWrapp = styled.div``;

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

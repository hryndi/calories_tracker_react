import styled from "@emotion/styled";
import { FC } from "react";
import { SetStateAction } from "react";
const InputWrapp = styled.div``;
const Input = styled.input``;

interface FormsProps {
  itemName: React.Dispatch<SetStateAction<string>>;
  proteinVal?: React.Dispatch<SetStateAction<number>>;
  fatVal?: (value: React.SetStateAction<number>) => void;
  caloriesVal?: (value: React.SetStateAction<number>) => void;
  carbsVal?: (value: React.SetStateAction<number>) => void;
}

const Forms: FC<FormsProps> = ({ itemName, proteinVal, fatVal, caloriesVal, carbsVal }) => {
  return (
    <InputWrapp>
      <Input placeholder="Name" onChange={(e) => itemName(e.target.value)} />
      <Input placeholder="Protein (g)" onChange={(e) => proteinVal(e.target.value)} />
      <Input placeholder="Fat (g)" />
      <Input placeholder="Calories" />
      <Input placeholder="Carbs(g)" />
    </InputWrapp>
  );
};

export default Forms;

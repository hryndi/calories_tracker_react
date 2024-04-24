import styled from "@emotion/styled";
import { CardValue } from "../../types";
import EatingImg from "../../assets/eatimg.png";
const SummWrapp = styled.div`
  word-spacing: 5px;
`;
const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

const Summary = ({
  totalHandler,
}: {
  totalHandler: <T extends keyof CardValue>(value: T) => number;
}) => {
  return (
    <SummWrapp>
      <H2>
        Total calories: <Icon src={EatingImg}></Icon> {totalHandler("calories")}
      </H2>
      <H2>Total Protein: {totalHandler("protein")}g</H2>
      <H2>Total Carbs: {totalHandler("carbs")}g</H2>
      <H2>Total Fat: {totalHandler("fat")}g</H2>
    </SummWrapp>
  );
};

export default Summary;

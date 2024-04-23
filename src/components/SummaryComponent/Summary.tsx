import styled from "@emotion/styled";
import { CardValue } from "../../types";
const SummWrapp = styled.div``;
const H2 = styled.h2``;

const Summary = ({
  totalHandler,
}: {
  totalHandler: <T extends keyof CardValue>(value: T) => number;
}) => {
  return (
    <SummWrapp>
      <H2>Total calories: {totalHandler("calories")}</H2>
      <H2>Total Protein: {totalHandler("protein")}</H2>
      <H2>Total Carbs:{totalHandler("carbs")}</H2>
      <H2>Total Fat:{totalHandler("fat")}</H2>
    </SummWrapp>
  );
};

export default Summary;

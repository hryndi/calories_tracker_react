import styled from "@emotion/styled";
const SummWrapp = styled.div``;
const H2 = styled.h2``;

const Summary = () => {
  return (
    <SummWrapp>
      <H2>Total calories</H2>
      <H2>Total Protein:</H2>
      <H2>Total Carbs:</H2>
      <H2>Total Fat:</H2>
    </SummWrapp>
  );
};

export default Summary;

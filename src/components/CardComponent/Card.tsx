import styled from "@emotion/styled";

const CardWrapp = styled.div``;
const H2 = styled.h2``;
const P = styled.p``;
const BtnWrap = styled.div``;
const BtnCountWrap = styled.div``;

const Card = () => {
  return (
    <CardWrapp>
      <H2>Apple</H2>
      <P>Protein</P>
      <P>Carbs</P>
      <P>Fett</P>

      <BtnWrap>
        <BtnCountWrap>
          <button>+</button>
          <P>1</P>
          <button>-</button>
        </BtnCountWrap>
        <button>Edit</button>
        <button>Delete</button>
      </BtnWrap>
    </CardWrapp>
  );
};

export default Card;

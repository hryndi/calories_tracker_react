import styled from "@emotion/styled";
import { CardTypes } from "../../types";
import Button from "../ButtonsComponent/Button";
const CardsWrapp = styled.div`
  display: flex;
  gap: 1.5rem;
`;
const CardContent = styled.div``;
const H2 = styled.h2``;
const P = styled.p``;
const BtnWrap = styled.div``;
const BtnCountWrap = styled.div``;

const Card = ({
  cardValues,
  plusMinusHandler,
  editHandler,
}: {
  cardValues: CardTypes[];
  plusMinusHandler: (action: string, id: string) => void;
  editHandler: (id: string) => void;
}) => {
  console.log("CARDS");

  return (
    <CardsWrapp>
      {cardValues.map((item) => (
        <CardContent>
          <H2>{item.item_name}</H2>
          <P>{item.protein}</P>
          <P>{item.carbs}</P>
          <P>{item.fat}</P>
          <P>{item.calories}</P>

          <BtnWrap>
            <BtnCountWrap>
              <Button onClick={() => plusMinusHandler("increace", item.id)}>
                +
              </Button>
              <P>{item.quantity}</P>
              <Button onClick={() => plusMinusHandler("decreace", item.id)}>
                -
              </Button>
            </BtnCountWrap>
            <Button onClick={() => editHandler(item.id)}>dwadwad</Button>
            <Button>Delete</Button>
          </BtnWrap>
        </CardContent>
      ))}
    </CardsWrapp>
  );
};

export default Card;

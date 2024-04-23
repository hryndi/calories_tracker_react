import styled from "@emotion/styled";
import { CardTypes } from "../../types";
import Button from "../ButtonsComponent/Button";
const CardsWrapp = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  max-width: 900px;
`;
const CardContent = styled.div`
  margin-block: 1.35rem;
`;
const H2 = styled.h2``;
const P = styled.p``;
const BtnWrap = styled.div``;
const BtnCountWrap = styled.div``;

interface CardPropTypes {
  cardValues: CardTypes[];
  plusMinusHandler: (action: string, id: string) => void;
  editHandler: (id: string) => void;
  deleteHandler: (id: string) => void;
}

const Card = ({ cardValues, plusMinusHandler, editHandler, deleteHandler }: CardPropTypes) => {
  console.log("CARDS");

  return (
    <CardsWrapp>
      {cardValues.map((item) => (
        <CardContent>
          <H2>{item.item_name}</H2>
          <P>Protein: {item.protein}</P>
          <P>Carbs: {item.carbs}</P>
          <P>Fat: {item.fat}</P>
          <P>Calories: {item.calories}</P>

          <BtnWrap>
            <BtnCountWrap>
              <Button onClick={() => plusMinusHandler("increace", item.id)}>+</Button>
              <P>{item.quantity}</P>
              <Button onClick={() => plusMinusHandler("decreace", item.id)}>-</Button>
            </BtnCountWrap>
            <Button onClick={() => editHandler(item.id)}>Edit</Button>
            <Button onClick={() => deleteHandler(item.id)}>Delete</Button>
          </BtnWrap>
        </CardContent>
      ))}
    </CardsWrapp>
  );
};

export default Card;

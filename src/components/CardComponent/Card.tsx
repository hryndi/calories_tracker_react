import styled from "@emotion/styled";
import { CardTypes } from "../../types";
import Button from "../ButtonsComponent/Button";
import BtnsWrapp from "../ButtonsComponent/BtnsWrapp";
import EditImg from "../../assets/edit-tools.png";
import DeleteImg from "../../assets/trash.png";
const CardsWrapp = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  max-width: 900px;
`;
const CardContent = styled.div`
  width: 215px;
  margin-block: 1.35rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1rem;
  font-size: 1.2rem;
  border: 2px #33abc2 solid;
  padding: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const H2 = styled.h2`
  font-size: 1.3rem;
`;
const P = styled.p`
  &.count {
    flex: 1 1 0;
    min-width: 0;
    height: max-content;
    background-color: #fff;
    text-align: center;
  }
`;
const ParagrapfWrapp = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Icon = styled.img`
  width: 15px;
  height: 15px;
`;

interface CardPropTypes {
  cardValues: CardTypes[];
  plusMinusHandler: (action: string, id: string) => void;
  editHandler: (id: string) => void;
  deleteHandler: (id: string) => void;
}

const Card = ({
  cardValues,
  plusMinusHandler,
  editHandler,
  deleteHandler,
}: CardPropTypes) => {
  console.log("CARDS");

  return (
    <CardsWrapp>
      {cardValues.map((item) => (
        <CardContent>
          <H2>{item.item_name}</H2>
          <div>
            <ParagrapfWrapp>
              <P>Calories: </P>
              <P>{item.calories}</P>
            </ParagrapfWrapp>
            <ParagrapfWrapp>
              <P>Protein: </P>
              <P>{item.protein}g</P>
            </ParagrapfWrapp>
            <ParagrapfWrapp>
              <P>Carbs: </P>
              <P>{item.carbs}g</P>
            </ParagrapfWrapp>
            <ParagrapfWrapp>
              <P>Fat: </P>
              <P>{item.fat}g</P>
            </ParagrapfWrapp>
          </div>

          <BtnWrap>
            <BtnsWrapp>
              <Button
                className="width-100 green group-children"
                onClick={() => plusMinusHandler("increace", item.id)}
              >
                +
              </Button>
              <P className="count group-children">{item.quantity}</P>
              <Button
                className="width-100 red group-children"
                onClick={() => plusMinusHandler("decreace", item.id)}
              >
                —
              </Button>
            </BtnsWrapp>

            <BtnsWrapp>
              <Button
                data-icon="edit-item"
                className="green group-children"
                onClick={() => editHandler(item.id)}
              >
                <Icon src={EditImg} alt="" /> Edit
              </Button>
              <Button
                className="red group-children"
                onClick={() => deleteHandler(item.id)}
              >
                <Icon src={DeleteImg} alt="" /> Delete
              </Button>
            </BtnsWrapp>
          </BtnWrap>
        </CardContent>
      ))}
    </CardsWrapp>
  );
};

export default Card;

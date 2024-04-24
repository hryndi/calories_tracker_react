import styled from "@emotion/styled";
import Forms from "./components/FormsComponent/Forms";
import Button from "./components/ButtonsComponent/Button";
import BtnsWrapp from "./components/ButtonsComponent/BtnsWrapp";
import Card from "./components/CardComponent/Card";
import Summary from "./components/SummaryComponent/Summary";
import { useCaloriesTracker } from "./hooks/useCaloriesTracker";

const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin-block: 2rem;
  border-radius: 10px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
  display: grid;
  gap: 1rem;
`;

const Header = styled.h1`
  margin: 1rem;
`;

function App() {
  const {
    inputMap,
    submitHandler,
    saveHandler,
    calculateHandler,
    clearAllHandler,
    editHandler,
    totalHandler,
    deleteHandler,
    cardValues,
    isEditMode,
  } = useCaloriesTracker();
  return (
    <Main>
      <Header>Dima`s Nutrion Meter</Header>
      <Forms itemMap={inputMap} />

      <BtnsWrapp>
        {!isEditMode ? (
          <Button
            className="width-100 green group-children"
            onClick={submitHandler}
          >
            Add item
          </Button>
        ) : (
          <Button
            className="width-100 green group-children"
            onClick={saveHandler}
          >
            Save
          </Button>
        )}

        <Button
          className="width-100 red group-children"
          onClick={clearAllHandler}
        >
          Clear All
        </Button>
      </BtnsWrapp>
      <Card
        plusMinusHandler={calculateHandler}
        cardValues={cardValues}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
      />
      <Summary totalHandler={totalHandler} />
    </Main>
  );
}

export default App;

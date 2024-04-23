import styled from "@emotion/styled";
import Forms from "./components/FormsComponent/Forms";
import Button from "./components/ButtonsComponent/Button";
import Card from "./components/CardComponent/Card";
import Summary from "./components/SummaryComponent/Summary";
import { useCaloriesTracker } from "./hooks/useCaloriesTracker";
const Main = styled.main``;
const Header = styled.h1``;

function App() {
  const {
    inputMap,
    submitHandler,
    saveHandler,
    calculateHandler,
    clearAllHandler,
    editHandler,
    totalHandler,
    cardValues,
  } = useCaloriesTracker();
  return (
    <Main>
      <Header>Dima`s Nutrion Meter</Header>
      <Forms itemMap={inputMap} />

      <button onClick={saveHandler}>save item</button>
      <Button onClick={submitHandler}>Add item</Button>
      <Button onClick={clearAllHandler}>Clear All</Button>
      <Card
        plusMinusHandler={calculateHandler}
        cardValues={cardValues}
        editHandler={editHandler}
      />
      <Summary totalHandler={totalHandler} />
    </Main>
  );
}

export default App;

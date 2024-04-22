import styled from "@emotion/styled";
import Forms from "./components/FormsComponent/Forms";
import Button from "./components/ButtonsComponent/Button";
import Card from "./components/CardComponent/Card";
import Summary from "./components/SummaryComponent/Summary";
import { useCaloriesTracker } from "./hooks/useCaloriesTracker";
const Main = styled.main``;
const Header = styled.h1``;

function App() {
  const { inputMap } = useCaloriesTracker();
  return (
    <Main>
      <Header>Dima`s Nutrion Meter</Header>
      <Forms itemMap={inputMap} />

      <Button />
      <Button />
      <Card />
      <Summary />
    </Main>
  );
}

export default App;

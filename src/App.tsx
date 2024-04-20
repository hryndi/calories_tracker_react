import styled from "@emotion/styled";
import Forms from "./components/FormsComponent/Forms";
import Button from "./components/ButtonsComponent/Button";
import Card from "./components/CardComponent/Card";
import Summary from "./components/SummaryComponent/Summary";
import { v4 as uuid } from "uuid";
const Main = styled.main``;
const Header = styled.h1``;

function App() {
  console.log(uuid());

  return (
    <Main>
      <Header>Dima`s Nutrion Meter</Header>
      <Forms />
      <Button />
      <Button />
      <Card />
      <Summary />
    </Main>
  );
}

export default App;

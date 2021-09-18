import Navigation from "../Navigation/Navigation";
import { Container } from "./App.styled";
import { Route, Switch } from "react-router";
import Homepage from "../../views/Homapage";
import Moviespage from "../../views/Moviespage";
import Filmpage from "../../views/Filmpage";

export function App() {
  return (
    <Container>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/movies">
          <Moviespage />
        </Route>
        <Route path="/:filmId">
          <Filmpage />
        </Route>
      </Switch>
    </Container>
  );
}

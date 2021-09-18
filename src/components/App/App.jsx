import Navigation from "../Navigation/Navigation";
import { Container } from "../../views/styled/App.styled";
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
        <Route path="/movies" exact>
          <Moviespage />
        </Route>
        <Route path="/movies/:filmId">
          <Filmpage />
        </Route>
      </Switch>
    </Container>
  );
}

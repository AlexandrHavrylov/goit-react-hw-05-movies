import Navigation from "../Navigation/Navigation";
import { Container } from "../../styled/App.styled";
import { Route, Switch } from "react-router";
// import Homepage from "../../views/Homapage";
// import Moviespage from "../../views/Moviespage";
// import Filmpage from "../../views/Filmpage";
import { lazy, Suspense } from "react";
import { StyledLoader } from "../../styled/App.styled";

const Homepage = lazy(() => import("../../views/Homapage"));
const Moviespage = lazy(() => import("../../views/Moviespage"));
const Filmpage = lazy(() => import("../../views/Filmpage"));

export function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<StyledLoader type="ThreeDots" color="gray" />}>
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
      </Suspense>
    </Container>
  );
}

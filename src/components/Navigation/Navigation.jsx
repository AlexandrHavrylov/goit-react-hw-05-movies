import { Header, StyledNavLink } from "../../styled/Navigation.styled";

const Navigation = () => {
  return (
    <Header>
      <nav>
        <StyledNavLink to="/" exact>
          {" "}
          Home{" "}
        </StyledNavLink>
        <StyledNavLink to="/movies"> Movies </StyledNavLink>
      </nav>
    </Header>
  );
};

export default Navigation;

import { useState } from "react";
import { useLocation, useHistory } from "react-router";
import { SearchForm, Button, Input } from "../../styled/SearchInput.styled";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  const history = useHistory();
  const location = useLocation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    query.trim() &&
      history.push({
        ...location,
        search: `query=${query}`,
      });
  };

  return (
    <SearchForm onSubmit={handleFormSubmit}>
      <Input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        value={query}
      />
      <Button type="submit"></Button>
    </SearchForm>
  );
}

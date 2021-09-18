import { useState } from "react";
import { SearchForm, Button, Input } from "./SearchInput.styled";

export default function SearchInput({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
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

import styled from "@emotion/styled";

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 16px;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  li {
    padding: 16px;
    border: 1px grey solid;
    border-radius: 10px;
  }
  h2 {
    border-bottom: 1px black solid;
  }
  p {
    padding: 24px;

    width: 500px;
  }
`;

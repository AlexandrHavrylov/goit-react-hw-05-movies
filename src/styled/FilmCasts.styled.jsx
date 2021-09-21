import styled from "@emotion/styled";

export const Actors = styled.ul`
  list-style: none;
  margin: 0;
  padding: 16px;
`;
export const Actor = styled.li`
  display: flex;
  gap: 25px;
  width: 400px;
  border: 1px grey solid;
  border-radius: 15px;
  padding: 16px;
  :not(last-child) {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 65px;
  }
`;

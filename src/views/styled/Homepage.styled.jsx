import styled from "@emotion/styled";

export const Films = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
`;

export const Film = styled.li`
  width: 250px;
  &:hover {
    box-shadow: 3px 3px 6px rgba(51, 50, 50, 0.25);
    border-radius: 3px;
    transform: scale(1.03);
  }
`;

export const FilmPoster = styled.img`
  width: 100%;
`;

import { ReviewsList } from "../../styled/FilmReviews.styled";
import { useEffect, useState } from "react";
import { fetchRewies } from "../../servises/films-api";

export default function FilmReviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const reviews = await fetchRewies(id);
      setReviews(reviews);
    };
    fetch();
  }, [id]);

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map((review) => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <p>We don`t have any reviews for this film</p>
      )}
    </>
  );
}

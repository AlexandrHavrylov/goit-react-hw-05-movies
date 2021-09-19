import { ReviewsList } from "../../styled/FilmReviews.styled";
import { useEffect } from "react";

export default function FilmReviews({ reviews }) {
  useEffect(() => {
    reviews &&
      window.scrollTo({
        top: 500,
        behavior: "smooth",
      });
  }, [reviews]);
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

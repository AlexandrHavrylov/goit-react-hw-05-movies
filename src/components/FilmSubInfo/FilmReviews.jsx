import { ReviewsList } from "../../styled/FilmReviews.styled";

export default function FilmReviews({ reviews }) {
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

import { Icons } from "./Icons";
export interface IReview {
  comment: string;
  fullName: string;
}

export interface IReviewProps {
  review: IReview;
}

export const Review = ({ review }: IReviewProps) => {
  const { comment, fullName } = review;
  return (
    <div className="review">
      <p className="review__body"><Icons.openQuotation className="review__quotation" />{comment}<Icons.closeQuotation className="review__quotation" /></p>
      <p className="review__author">{fullName}</p>
    </div>
  );
};

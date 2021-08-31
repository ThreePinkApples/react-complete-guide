import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

export default function QuoteDetail() {
  const params = useParams();
  return (
    <>
      <p>{params.quoteId} - Such details</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

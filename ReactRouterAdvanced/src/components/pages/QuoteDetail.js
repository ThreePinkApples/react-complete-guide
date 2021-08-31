import { useParams } from "react-router-dom";

export default function QuoteDetail() {
  const params = useParams();
  return <p>{params.quoteId} - Such details</p>;
}

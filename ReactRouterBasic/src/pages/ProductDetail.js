import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  const productId = params.productId;
  return (
    <section>
      <h1>Product detail</h1>
      <h3>{productId}</h3>
    </section>
  );
}

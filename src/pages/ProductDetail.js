import { Fragment } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();
  return (
    <Fragment>
      <h1>Product Details!</h1>
      <p> {params.id}</p>
    </Fragment>
  );
}

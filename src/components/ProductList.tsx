import React from "react";

import { Product } from "../services/product-service";
interface Props {
  products: Product[];
}
const ProductList = ({ products }: Props) => {
  return (
    products && (
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    )
  );
};

export default ProductList;

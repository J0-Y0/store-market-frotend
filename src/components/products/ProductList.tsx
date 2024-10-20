import React from "react";

import { Product } from "../../services/product-service";
import ProductCard from "./PdoductCard";
import { Grid2, Stack } from "@mui/material";
interface Props {
  products: Product[];
}
const ProductList = ({ products }: Props) => {
  return (
    <Grid2
      container
      spacing={{ xs: 1, sm: 2 }}
      sx={{ flexWrap: "wrap", justifyContent: "center" }}
    >
      {products && products.map((product) => <ProductCard product={product} />)}
    </Grid2>
  );
};

export default ProductList;

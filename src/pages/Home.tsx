import React, { useEffect, useState } from "react";
import ProductService, { Product } from "../services/product-service";
import ProductList from "../components/products/ProductList";
import { useAuth } from "../context/auth/authProvider";
import { CanceledError } from "../services/api-client";
import ProductCard from "../components/products/PdoductCard";
import { Divider, Grid2 } from "@mui/material";
import ProductFilter from "../components/products/ProductFilter";
import useProduct from "../hooks/useProduct";

const Home = () => {
  const products = useProduct();

  return (
    <Grid2 container spacing={1}>
      <Grid2
        size={3}
        sx={{
          height: "90vh",
          overflowY: "auto",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <ProductFilter />
      </Grid2>

      <Divider orientation="vertical" flexItem />
      <Grid2
        size={8}
        sx={{
          height: "90vh",
          overflowY: "auto",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <ProductList products={products} />
      </Grid2>
    </Grid2>
  );
};

export default Home;

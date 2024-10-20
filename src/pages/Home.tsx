import React, { useEffect, useState } from "react";
import ProductService, { Product } from "../services/product-service";
import ProductList from "../components/products/ProductList";
import { useAuth } from "../context/auth/authProvider";
import { CanceledError } from "../services/api-client";
import ProductCard from "../components/products/PdoductCard";

const Home = () => {
  const [products, setProduct] = useState<Product[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const { message, setMessage } = useAuth();
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = ProductService.getProducts();
    request
      .then((res) => {
        console.log(res.data.results);
        setProduct(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setMessage({
          content: err.message,
          severity: "error",
        });
        setLoading(false);
      });
    return () => cancel();
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};
export default Home;

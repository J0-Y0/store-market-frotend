import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth/authProvider';
import productService, { Product } from '../services/product-service';
import { CanceledError } from 'axios';

const useProduct = () => {
  const [products, setProduct] = useState<Product[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const { message, setMessage } = useAuth()
  
    useEffect(() => {
    setLoading(true);
    const { request, cancel } = productService.getProducts();
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
   products
  )
}

export default useProduct

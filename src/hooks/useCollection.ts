import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth/authProvider';
import collectionService, { Collection } from '../services/collection-service';
import { CanceledError } from 'axios';

const useCollection = () => {
  const [collections, setCollections] = useState<Collection[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const { message, setMessage } = useAuth()
  
    useEffect(() => {
    setLoading(true);
    const { request, cancel } = collectionService.getCollections();
    request
      .then((res) => {
        console.log(res.data.results);
        setCollections(res.data.results);
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
   collections
  )
}

export default useCollection

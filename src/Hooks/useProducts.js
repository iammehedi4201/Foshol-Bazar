import { useEffect, useState } from "react";

const useProducts = (currentPage, pageSize, setLoader) => {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [productsCount, setProductsCount] = useState(0);
  console.log("product count form use product :-",productsCount);
  useEffect(() => {
    fetch(
      `http://localhost:3000/products?currentPage=${currentPage}&pageSize=${pageSize}&search=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoadedProducts(data.products);
        setProductsCount(data.productsCount);
        setLoader(false);
      })
      .catch((error) => console.error(error));
  }, [currentPage, pageSize,searchValue]);

  return { loadedProducts, productsCount };
};

export default useProducts;

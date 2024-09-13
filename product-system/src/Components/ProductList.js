import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Typography } from "@mui/material";
import ProductDetails from "./ProductDetails";

function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const [productRecords, setProductRecords] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductRecords(data))
      .catch((error) => console.log("error"));
  }, []);

  return (
    <>
      <Typography variant="h3" fontStyle="oblique" fontFamily="auto">
        List Of Product
      </Typography>
      <div>
        {productRecords.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onShowDetails={handleShowDetails}
          />
        ))}
        <ProductDetails product={selectedProduct} onClose={handleCloseModal} />
      </div>
    </>
  );
}

export default ProductList;

import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/addCard";

export default function ProductCard({ product, onShowDetails }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("function calling..");
    console.log("product", product);
    const newProduct = { id: product.id, name: product.title, price: product.price };
    dispatch(addProduct(newProduct));
  };

  return (
    <div className="ProductCard">
      <Box >
        <Paper elevation={3} className="paperStyle" onClick={() => onShowDetails(product)}>
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="imageInCard"
          />
          <Typography variant='subtitle1' className="card-title">
            {product.title}
          </Typography>
          <Typography className="card-price">{product.price}</Typography>
            <Typography variant="body2" className="card-description">
              {product.description}
            </Typography>
        </Paper>
        <div className="card-actions">
            <Button variant="contained" color="primary" onClick={handleClick}>
              Add To Cart
            </Button>
            <Button variant="contained" color="primary" onClick={() => onShowDetails(product)}>
              View Details
            </Button>
          </div>
      </Box>
    </div>
  );
}

import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/addCard';

function ProductDetails({ product, onClose }) {

  const dispatch = useDispatch();

  if (!product) return null;


  const handleClick = () =>{
    const newProduct = { id: product.id, name: product.title, price: product.price };
    dispatch(addProduct(newProduct));
  }

  return (
    <div>
      <h1>Product Details</h1>
      <Dialog
      open={Boolean(product)}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Product Details</DialogTitle>
      <DialogContent>
      <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Description:</strong> {product.description}
            </Typography>
            <Typography variant="body1">
              <strong>Price:</strong> ${product.price}
            </Typography>
            <Typography variant="body1">
              <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
            </Typography>
            <Typography variant="body1">
              <strong>ID:</strong> {product.id}
            </Typography>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={handleClick} >
        Add To Cart
      </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
      </div>
  )
}

export default ProductDetails

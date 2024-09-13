import React from 'react';
import { List, ListItem, ListItemText, Typography, Paper, Button, Divider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { clearProducts, removeProduct } from '../redux/addCard';

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  const handleClearCart = () => {
    dispatch(clearProducts());
  };

  const handleRemoveItem = (id) => {
    dispatch(removeProduct(id));
  };

  const totalCost = products.reduce((total, item) => total + item.price, 0);

  return (
    <Paper style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Shopping Cart
      </Typography>
      <List>
        {products.map((item, index) => (
          <ListItem key={`${item.id}-${index}`} divider>
            <ListItemText
              primary={item.name}
              secondary={item.price}
            />
             <Button onClick={() => handleRemoveItem(item.id)} color="error">
                Remove
              </Button>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography variant="h6" style={{ marginTop: 10 }}>
        Total Cost: ${totalCost}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 20 }}
        onClick={handleClearCart}
      >
        Clear Cart
      </Button>
    </Paper>
  );
}

export default Cart;
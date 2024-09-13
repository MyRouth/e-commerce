import React, { useState } from 'react';
import { IconButton, Badge, Menu, MenuItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from './Cart'; 
import { useSelector } from 'react-redux';

function CartIcon() {
  const [anchorEl, setAnchorEl] = useState(null);

  const products = useSelector(state => state.products);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleClick}
      >
        <Badge badgeContent={products.length} color="secondary"> 
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Cart /> 
        </MenuItem>
      </Menu>
    </>
  );
}

export default CartIcon;
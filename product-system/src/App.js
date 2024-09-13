import React from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import { Container } from '@mui/material';
import NavBar from './Components/NavBar';


function App() {
  return (
    <main className="App">
      <Container maxWidth='lg'>
    <NavBar />
    <ProductList />
    </Container>
    </main>
  );
}

export default App;

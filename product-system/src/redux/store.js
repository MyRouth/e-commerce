import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './addCard'; 
import { localStorageMiddleware } from './localStorageMiddleware';


 const store = configureStore({
  reducer: {
    products: productsReducer, 
  },
  middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(localStorageMiddleware)
});

export default store;
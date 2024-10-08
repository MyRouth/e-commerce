export const localStorageMiddleware = store => next => action => {
    const result = next(action);
  
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.products));
  
    return result;
  };
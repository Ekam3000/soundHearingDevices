
//This is a reducer function for a Redux store in JavaScript. It manages the state of a shopping cart in an application.

import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, products: [...state.products, action.product] };
    case REMOVE_FROM_CART:
      return { ...state, products: state.products.filter(product => product.id !== action.productId && product.uuid!=action.productUuid) };
    default:
      return state;
  }
};
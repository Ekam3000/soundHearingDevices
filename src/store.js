
//The Redux store is where the state of the application is held.

import { createStore } from 'redux';
import { cartReducer } from './reducer';

export const store = createStore(cartReducer);
import { createStore } from 'redux'
import rootReducer from '../Reducers/rootReducer'

const store = createStore(rootReducer)
export default store;

// pov please gomycode can you update your courses ?

import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './Reducers/rootReducers'



const store = configureStore({
    reducer: rootReducer
  });

export default store;

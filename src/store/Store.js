import { createStore } from 'redux';
import CombinedReducers from './reducers/CombinedReducers';

// Create a store container all the reducers combined; 
const store = createStore(CombinedReducers);
export default store;
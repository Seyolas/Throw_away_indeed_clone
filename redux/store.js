
import { createStore } from 'redux';
import combineReducers from '../redux/reducers/index';


const store = createStore(combineReducers);

export default store;
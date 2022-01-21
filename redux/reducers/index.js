import { combineReducers } from 'redux';
import {navbarReducer} from '../reducers/navbarReducer'
import {searchReducer}  from '../reducers/searchReducer';

export default combineReducers({
    searchReducer,
    navbarReducer
});




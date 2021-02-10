import carReducer from './cars/carReducer';
import {combineReducers} from 'redux'; 

export default combineReducers({
    cars : carReducer
})

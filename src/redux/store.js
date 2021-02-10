import {createStore, compose, applyMiddleware} from 'redux'
import carReducer from './cars/carReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const initialState = {
    loading : false,
    cars : [],
    error : "",
    loadingMessage : ""
}
const store = createStore(carReducer,
                initialState,
                composeWithDevTools(applyMiddleware(thunk)));

export default store; 
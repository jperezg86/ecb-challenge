import ApiService from "../../apiService"
import { FETCH_CARS_FAILURE, FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS } from "./carTypes"

export const fetchCarsInitRequest = () => {
    return {
        type : FETCH_CARS_REQUEST
    }
} 

export const fetchCarsSuccess = (cars) => {
    return {
        type : FETCH_CARS_SUCCESS,
        payload: cars
    }
}

export const fetchCarsFailure = (error) => {
    return {
        type : FETCH_CARS_FAILURE,
        payload : error
    }
}

export const fetchCars = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchCarsInitRequest());
            const cars = await ApiService.fetchCars();
            dispatch(fetchCarsSuccess(cars));
        }catch(e) {
            dispatch(fetchCarsFailure());
        }
    }
}
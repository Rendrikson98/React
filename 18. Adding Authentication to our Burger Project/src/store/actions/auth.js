import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        console.log(email)
        console.log(password)
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        dispatch(authStart())
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDfiu4sj4krzb8zqeV-PBUpL53NHfisuyg';
        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDfiu4sj4krzb8zqeV-PBUpL53NHfisuyg'
        }
        axios.post(url, authData)
            .then(res => {
                console.log(res.data);
                dispatch(authSuccess(res.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(authFail(error));
            })
    }
}
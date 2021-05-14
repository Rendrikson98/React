import { put, delay } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('ExpirationDate');
    yield localStorage.removeItem('userId');
    yield put(actions.logoutSuccess());
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime);
    yield put(actions.logout())
}
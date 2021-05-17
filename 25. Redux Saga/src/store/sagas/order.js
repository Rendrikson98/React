import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../../axios-orders';

export function* purchaseBurgerSaga(action) {
    yield put(actions.purchaseBurgerStart());

    try {
        const response = yield axios.post('/orders.json?auth=' + action.token, action.orderData)
        yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));
    } catch (error) {
        yield put(actions.purchaseBurgerFail(error));
    }
}

export function* fetchOrders(action) {
    yield put(actions.fetchOrdersStart())
    const queryParams = `?auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`

    try {
        const response = yield axios.get('/orders.json' + queryParams);
        let fetcheOrders = [];
        let teste = [];
        for (let key in response.data) {
            fetcheOrders.push({
                ...response.data[key],
                id: key
            })
            teste.push(response.data[key])
        }
        yield put(actions.fetchOrdersSuccess(fetcheOrders))
    } catch (error) {
        yield put(actions.fetchOrdersFail(error));
    }
}
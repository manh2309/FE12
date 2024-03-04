import getCustomers from "../fetchApi/getCustomer"
import addCustomer from "../fetchApi/addCustomer";
import * as types from "../constant"
import { put, takeEvery } from "redux-saga/effects"

function* getListCustomers() {
    try {
        const res = yield getCustomers();
        yield put({
            type: types.GET_CUSTOMER_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_CUSTOMER_FAILURE,
            payload: { errorMessage: error.message }
        })

    }
}


function* addCustomerSaga({ payload }) {
    console.log("1111", payload);
    try {
        const res = yield addCustomer(payload);
        yield put({
            type: types.POST_CUSTOMER_SUCCESS,
            payload: res
        })
        yield getListCustomers()
    } catch (error) {
        yield put({
            type: types.POST_CUSTOMER_FAILURE,
            payload: { errorMessage: error.message }
        })
    }
}
export const CustomerSaga = [
    takeEvery(types.GET_CUSTOMER_REQUEST, getListCustomers),
    takeEvery(types.POST_CUSTOMER_REQUEST, addCustomerSaga)
]
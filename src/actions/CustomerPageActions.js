import * as types from "../constant"

export function getCustomers(){
    return({
        type: types.GET_CUSTOMER_REQUEST,
        
    })
}

export function addCustomer(payload){
    return({
        type: types.POST_CUSTOMER_REQUEST,
        payload: payload
    })
}


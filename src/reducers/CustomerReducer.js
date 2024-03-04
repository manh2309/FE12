import * as types from "../constant"
const initState = {
    listCustomers: [],
    isFetching: false,
    dataFetching: false,
    error: false,
    errorMessage: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case types.GET_CUSTOMER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.GET_CUSTOMER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetching: true,
                error: false,
                errorMessage: null,
                listCustomers: action.payload
            }

        case types.GET_CUSTOMER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessagse: action.payload.errorMessage
            }



        case types.POST_CUSTOMER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.POST_CUSTOMER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetching: true,
                error: false,
                errorMessage: null,
                listCustomers: action.payload
            }

        case types.POST_CUSTOMER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessagse: action.payload.errorMessage
            }
        default:
            return state
    }
}
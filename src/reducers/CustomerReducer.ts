import {Customer} from "../models/Customer.ts";

export const initialCustomerState: Customer[] = [];

export const CustomerReducer = (
    state = initialCustomerState , action: {type: string, payload: Customer}
) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return [...state, action.payload]
        case 'UPDATE_CUSTOMER':
            return state.map((customer: Customer) => customer.id === action.payload.id
                ? action.payload
                : customer
            )
        case 'DELETE_CUSTOMER':
            return state.filter((customer: Customer) => customer.id !== action.payload.id)
        default:
            return state;
    }
}
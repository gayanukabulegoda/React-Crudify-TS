import {Customer} from "../models/Customer.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Customer[] = [];

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            state.push(action.payload);
        },
        updateCustomer: (state, action) => {
            return state.map((customer: Customer) => customer.id === action.payload.id
                ? action.payload
                : customer
            );
        },
        deleteCustomer: (state, action) => {
            return state.filter((customer: Customer) => customer.id !== action.payload.id);
        }
    }
});

export const {addCustomer, updateCustomer, deleteCustomer} = customerSlice.actions;
export default customerSlice.reducer;
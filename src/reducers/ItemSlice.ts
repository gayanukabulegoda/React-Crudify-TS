import {Item} from "../models/Item.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Item[] = [];

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        updateItem: (state, action) => {
            return state.map((item: Item) => item.id === action.payload.id
                ? action.payload
                : item
            );
        },
        deleteItem: (state, action) => {
            return state.filter((item: Item) => item.id !== action.payload.id);
        }
    }
});

export const {addItem, updateItem, deleteItem} = itemSlice.actions;
export default itemSlice.reducer;
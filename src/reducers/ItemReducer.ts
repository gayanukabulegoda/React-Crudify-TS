import {Item} from "../models/Item.ts";

export const initialItemState: Item[] = [];

export const ItemReducer = (
    state = initialItemState, action: {type: string, payload: Item}
) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]
        case 'UPDATE_ITEM':
            return state.map((item: Item) => item.id === action.payload.id
                ? action.payload
                : item
            )
        case 'DELETE_ITEM':
            return state.filter((item: Item) => item.id !== action.payload.id)
        default:
            return state;
    }
}
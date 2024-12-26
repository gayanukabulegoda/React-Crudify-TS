import {ReactNode, useReducer} from "react";
import {CustomerReducer, initialCustomerState} from "../reducers/CustomerReducer";
import {ItemReducer, initialItemState} from "../reducers/ItemReducer";
import { CustomerContext, ItemContext } from "./Contexts";

export function DataProvider({ children } : { children: ReactNode }) {
    const [customers, customerDispatch] = useReducer(CustomerReducer, initialCustomerState);
    const [items, itemDispatch] = useReducer(ItemReducer, initialItemState);
    return (
        <CustomerContext.Provider value={[customers, customerDispatch]}>
            <ItemContext.Provider value={[items, itemDispatch]}>
                {children}
            </ItemContext.Provider>
        </CustomerContext.Provider>
    );
}
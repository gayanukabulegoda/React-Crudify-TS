import React, {createContext, useState} from "react";
import {Customer} from "../models/Customer.ts";
import {Item} from "../models/Item.ts";

export const CustomerContext = createContext();
export const ItemContext = createContext();

export function CustomerProvider({ children } : { children: React.ReactNode }) {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [items, setItems] = useState<Item[]>([]);

    return (
        <CustomerContext.Provider value={[customers, setCustomers]}>
            <ItemContext.Provider value={[items, setItems]}>
                {children}
            </ItemContext.Provider>
        </CustomerContext.Provider>
    );
}
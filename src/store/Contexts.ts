import {createContext, Dispatch} from "react";
import {Customer} from "../models/Customer";
import {Item} from "../models/Item";

type CustomerContextType = [Customer[], Dispatch<{ type: string; payload: Customer }>];
type ItemContextType = [Item[], Dispatch<{ type: string; payload: Item }>];

export const CustomerContext = createContext<CustomerContextType>([[], () => {}]);
export const ItemContext = createContext<ItemContextType>([[], () => {}]);
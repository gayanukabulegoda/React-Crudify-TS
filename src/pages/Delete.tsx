import {Key} from "react";
import {Customer} from "../models/Customer.ts";
import {Item} from "../models/Item.ts";
import {HeadingModel} from "../components/HeadingModel.tsx";
import {CustomerCard} from "../components/CustomerCard.tsx";
import {ItemCard} from "../components/ItemCard.tsx";
import {DashboardOrDeleteSection} from "./DashboardOrDeleteSection.tsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteCustomer} from "../reducers/CustomerSlice.ts";
import {deleteItem} from "../reducers/ItemSlice.ts";

export function Delete() {
    const dispatch = useDispatch();
    const customers = useSelector((state: { customers: Customer[] }) => state.customers);
    const items = useSelector((state: { items: Item[] }) => state.items);

    const handleDeleteCustomer = (customer: Customer) => {
        dispatch(deleteCustomer(customer));
    }

    const handleDeleteItem = (item: Item) => {
        dispatch(deleteItem(item));
    }

    return (
        <div className="page-container space-y-8">
            <HeadingModel>Delete Customer</HeadingModel>
            <div className="section-grid">
                <DashboardOrDeleteSection title="Customers">
                    {customers.map((customer: Customer, index: Key) => (
                        <CustomerCard key={index} customer={customer} onDelete={handleDeleteCustomer}/>
                    ))}
                </DashboardOrDeleteSection>
                <DashboardOrDeleteSection title="Items">
                    {items.map((item: Item, index: Key) => (
                        <ItemCard key={index} item={item} onDelete={handleDeleteItem}/>
                    ))}
                </DashboardOrDeleteSection>
            </div>
        </div>
    );
}
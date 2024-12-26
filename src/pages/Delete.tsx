import {Key, useContext} from "react";
import {CustomerContext, ItemContext} from "../store/Contexts.ts";
import {Customer} from "../models/Customer.ts";
import {Item} from "../models/Item.ts";
import {HeadingModel} from "../components/HeadingModel.tsx";
import {CustomerCard} from "../components/CustomerCard.tsx";
import {ItemCard} from "../components/ItemCard.tsx";
import {DashboardOrDeleteSection} from "./DashboardOrDeleteSection.tsx";

export function Delete() {
    const [customers, customerDispatch] = useContext(CustomerContext);
    const [items, itemDispatch] = useContext(ItemContext);

    const handleDeleteCustomer = (customer: Customer) => {
        customerDispatch({type: 'DELETE_CUSTOMER', payload: customer});
    }

    const handleDeleteItem = (item: Item) => {
        itemDispatch({type: 'DELETE_ITEM', payload: item});
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
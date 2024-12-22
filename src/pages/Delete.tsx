import {Key, useContext} from "react";
import {CustomerContext, ItemContext} from "../store/CustomerProvider.tsx";
import {HeadingModel} from "../components/HeadingModel.tsx";
import {CustomerCard} from "../components/CustomerCard.tsx";
import {Customer} from "../models/Customer.ts";
import {Item} from "../models/Item.ts";
import {ItemCard} from "../components/ItemCard.tsx";

export function Delete() {
    const [customers, setCustomers] = useContext(CustomerContext);
    const [items, setItems] = useContext(ItemContext);

    const handleDeleteCustomer = (email: string) => {
        setCustomers(customers.filter((c: Customer) => c.email !== email));
    }

    const handleDeleteItem = (id: string) => {
        setItems(items.filter((i: Item) => i.id !== id));
    }

    return (
        <>
            <HeadingModel>Delete Customer</HeadingModel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Customers</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {customers.map((customer: Customer, index: Key) => (
                            <CustomerCard key={index} customer={customer} onDelete={handleDeleteCustomer}/>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Items</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {items.map((item: Item, index: Key) => (
                            <ItemCard key={index} item={item} onDelete={handleDeleteItem}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
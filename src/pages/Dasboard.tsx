import {Key, useContext} from "react";
import {CustomerContext, ItemContext} from "../store/CustomerProvider.tsx";
// import {ItemContext} from "../store/ItemProvider.tsx";
import {CustomerCard} from "../components/CustomerCard.tsx";
import {ItemCard} from "../components/ItemCard.tsx";
import {Customer} from "../models/Customer.ts";
import {Item} from "../models/Item.ts";
import {HeadingModel} from "../components/HeadingModel.tsx";

export function Dashboard() {
    const [customers] = useContext(CustomerContext);
    const [items] = useContext(ItemContext);

    return (
        <>
            <HeadingModel>Dashboard</HeadingModel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Customers</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {customers.map((customer: Customer, index: Key) => (
                            <CustomerCard key={index} customer={customer}/>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Items</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {items.map((item: Item, index: Key) => (
                            <ItemCard key={index} item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
import {Key, useContext} from "react";
import {CustomerContext, ItemContext} from "../../store/Contexts.ts";
import {Customer} from "../../models/Customer.ts";
import {Item} from "../../models/Item.ts";
import {CustomerCard} from "../../components/CustomerCard.tsx";
import {ItemCard} from "../../components/ItemCard.tsx";
import {HeadingModel} from "../../components/HeadingModel.tsx";
import {DashboardStats} from "./DashboardStats.tsx";
import {DashboardOrDeleteSection} from "../DashboardOrDeleteSection.tsx";

export function Dashboard() {
    const [customers] = useContext(CustomerContext);
    const [items] = useContext(ItemContext);

    return (
        <div className="page-container space-y-8">
            <div className="flex items-center justify-between">
                <HeadingModel>Dashboard</HeadingModel>
                <div className="flex gap-4">
                    <DashboardStats label="Total Customers" value={customers.length}/>
                    <DashboardStats label="Total Items" value={items.length}/>
                </div>
            </div>
            <div className="section-grid">
                <DashboardOrDeleteSection title="Customers">
                    {customers.map((customer: Customer, index: Key) => (
                        <CustomerCard key={index} customer={customer}/>
                    ))}
                </DashboardOrDeleteSection>
                <DashboardOrDeleteSection title="Items">
                    {items.map((item: Item, index: Key) => (
                        <ItemCard key={index} item={item}/>
                    ))}
                </DashboardOrDeleteSection>
            </div>
        </div>
    );
}
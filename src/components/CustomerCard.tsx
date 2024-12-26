import {Customer} from "../models/Customer.ts";
import {LocationIcon} from "../assets/LocationIcon.tsx";
import {EmailIcon} from "../assets/EmailIcon.tsx";
import {PhoneIcon} from "../assets/PhoneIcon.tsx";

interface CustomerCardProps {
    customer: Customer;
    onDelete?: (customer: Customer) => void;
}

export function CustomerCard({customer, onDelete}: CustomerCardProps) {
    return (
        <div className="card p-6 space-y-4">
            <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold text-gray-900">{customer.name}</h2>
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    Customer
                </span>
            </div>
            <div className="space-y-2">
                <p className="flex items-center text-gray-600">
                    <LocationIcon/>
                    {customer.address}
                </p>
                <p className="flex items-center text-gray-600">
                    <EmailIcon/>
                    {customer.email}
                </p>
                <p className="flex items-center text-gray-600">
                    <PhoneIcon/>
                    {customer.phone}
                </p>
            </div>
            {onDelete && (
                <button
                    className="delete-button"
                    onClick={() => onDelete(customer)}
                >
                    Delete
                </button>
            )}
        </div>
    );
}
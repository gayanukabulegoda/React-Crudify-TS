import {Customer} from "../models/Customer.ts";

interface CustomerCardProps {
    customer: Customer;
    onDelete?: (email: string) => void;
}

export function CustomerCard({customer, onDelete}: CustomerCardProps) {
    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-sm mx-auto border border-gray-200">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{customer.name}</h2>
                <p className="text-gray-600 mb-1"><strong>Address:</strong> {customer.address}</p>
                <p className="text-gray-600 mb-1"><strong>Email:</strong> {customer.email}</p>
                <p className="text-gray-600"><strong>Mobile:</strong> {customer.phone}</p>
                {onDelete && (
                    <button
                        className="mt-4 py-2 px-4 bg-red-500 text-white rounded transition duration-300 hover:bg-red-700"
                        onClick={() => onDelete(customer.email)}
                    >
                        Delete
                    </button>
                )}
            </div>
        </>
    );
}
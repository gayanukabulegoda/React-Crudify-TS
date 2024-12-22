import {Item} from "../models/Item.ts";

interface ItemCardProps {
    item: Item;
    onDelete?: (id: string) => void;
}

export function ItemCard({item, onDelete}: ItemCardProps) {
    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-sm mx-auto border border-gray-200">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h2>
                <p className="text-gray-600 mb-1"><strong>Description:</strong> {item.description}</p>
                <p className="text-gray-600"><strong>Price:</strong> Rs. {item.price.toFixed(2)}</p>
                {onDelete && (
                    <button
                        className="mt-4 py-2 px-4 bg-red-500 text-white rounded transition duration-300 hover:bg-red-700"
                        onClick={() => onDelete(item.id)}
                    >
                        Delete
                    </button>
                )}
            </div>
        </>
    );
}
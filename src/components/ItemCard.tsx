import {Item} from "../models/Item.ts";
import {DescriptionIcon} from "../assets/DescriptionIcon.tsx";
import {PriceIcon} from "../assets/PriceIcon.tsx";

interface ItemCardProps {
    item: Item;
    onDelete?: (item: Item) => void;
}

export function ItemCard({item, onDelete}: ItemCardProps) {
    return (
        <div className="card p-6 space-y-4">
            <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
                <span className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                    Item
                </span>
            </div>
            <div className="space-y-2">
                <p className="flex items-start text-gray-600">
                    <DescriptionIcon/>
                    <span className="flex-1">{item.description}</span>
                </p>
                <p className="flex items-center text-gray-600">
                    <PriceIcon/>
                    Rs. {item.price.toFixed(2)}
                </p>
            </div>
            {onDelete && (
                <button
                    className="delete-button"
                    onClick={() => onDelete(item)}
                >
                    Delete
                </button>
            )}
        </div>
    );
}
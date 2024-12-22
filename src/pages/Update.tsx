import {useContext, useState} from "react";
import {useNavigate} from "react-router";
import {CustomerContext, ItemContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";
import {CustomerInputModal} from "../components/CustomerInputModal.tsx";
import {SubmitBtnModel} from "../components/SubmitBtnModel.tsx";
import {HeadingModel} from "../components/HeadingModel.tsx";
import {Item} from "../models/Item.ts";
import {ItemInputModel} from "../components/ItemInputModel.tsx";

export function Update() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);
    const [items, setItems] = useContext(ItemContext);
    const [searchEmail, setSearchEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [searchItemName, setSearchItemName] = useState('')
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    const handleSearchCustomer = () => {
        const customer: Customer = customers.find((c: Customer) => c.email === searchEmail);
        if (customer) {
            setName(customer.name);
            setAddress(customer.address);
            setEmail(customer.email);
            setPhone(customer.phone);
        } else alert('Customer not found');
    }

    const handleSearchItem = () => {
        const item: Item = items.find((i: Item) => i.name === searchItemName);
        if (item) {
            setItemName(item.name);
            setDescription(item.description);
            setPrice(item.price);
        } else alert('Item not found!')

    }

    const handleUpdateCustomer = () => {
        setCustomers(customers.map((c: Customer) => c.email === searchEmail
            ? new Customer(name, address, email, phone) : c));
        navigate('/');
    }

    const handleUpdateItem = () => {
        setItems(items.map((i: Item) => i.name === searchItemName
            ? new Item(Math.random().toString(), itemName, description, price) : i));
        navigate('/');
    }

    return (
        <>
            <HeadingModel>Update Customer and Item</HeadingModel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Update Customer</h2>
                    <div className="flex justify-center gap-4 mb-8">
                        <input type="text" placeholder="Search by email"
                               className="w-full max-w-md p-2 border border-gray-300 rounded"
                               onChange={(e) => setSearchEmail(e.target.value)}/>
                        <button
                            className="py-2 px-4 bg-blue-500 text-white rounded transition duration-300 hover:bg-blue-700"
                            onClick={handleSearchCustomer}>Search
                        </button>
                    </div>
                    <form className="flex flex-col items-center gap-4 mb-8">
                        <CustomerInputModal
                            name={name}
                            address={address}
                            email={email}
                            phone={phone}
                            setName={setName}
                            setAddress={setAddress}
                            setEmail={setEmail}
                            setPhone={setPhone}
                        />
                    </form>
                    <div className="flex justify-center mt-4 gap-4">
                        <SubmitBtnModel handleSubmit={handleUpdateCustomer}>Update Customer</SubmitBtnModel>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Update Item</h2>
                    <div className="flex justify-center gap-4 mb-8">
                        <input type="text" placeholder="Search by item name"
                               className="w-full max-w-md p-2 border border-gray-300 rounded"
                               onChange={(e) => setSearchItemName(e.target.value)}/>
                        <button
                            className="py-2 px-4 bg-blue-500 text-white rounded transition duration-300 hover:bg-blue-700"
                            onClick={handleSearchItem}>Search
                        </button>
                    </div>
                    <form className="flex flex-col items-center gap-4 mb-8">
                        <ItemInputModel
                            name={itemName}
                            description={description}
                            price={price}
                            setItemName={setItemName}
                            setDescription={setDescription}
                            setPrice={setPrice}
                        />
                    </form>
                    <div className="flex justify-center mt-4 gap-4">
                        <SubmitBtnModel handleSubmit={handleUpdateItem}>Update Item</SubmitBtnModel>
                    </div>
                </div>
            </div>
        </>
    );
}
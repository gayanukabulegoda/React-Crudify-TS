import {useContext, useState} from "react";
import {useNavigate} from "react-router";
import {Customer} from "../models/Customer.ts";
import {CustomerContext, ItemContext} from "../store/CustomerProvider.tsx";
import {CustomerInputModal} from "../components/CustomerInputModal.tsx";
import {SubmitBtnModel} from "../components/SubmitBtnModel.tsx";
import {HeadingModel} from "../components/HeadingModel.tsx";
import {ItemInputModel} from "../components/ItemInputModel.tsx";
import {Item} from "../models/Item.ts";

export function Add() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);
    const [items, setItems] = useContext(ItemContext);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    const handleAddCustomer = ()=> {
        const newCustomer: Customer = new Customer(name, address, email, phone);
        setCustomers((customers: Customer[]) => [...customers, newCustomer]);
        navigate('/');
    }

    const handleSubmitItem = () => {
        const newItem = {id: Math.random().toString(), name: itemName, description, price};
        setItems((items: Item[]) => [...items, newItem]);
        navigate('/');
    }

    return (
        <>
            <HeadingModel>Add Customer</HeadingModel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Add Customer</h2>
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
                        <SubmitBtnModel handleSubmit={handleAddCustomer}>Add Customer</SubmitBtnModel>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Add Item</h2>
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
                        <SubmitBtnModel handleSubmit={handleSubmitItem}>Add Item</SubmitBtnModel>
                    </div>
                </div>
            </div>
        </>
    );
}
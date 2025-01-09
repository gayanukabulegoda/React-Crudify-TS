import {useState} from "react";
import {useNavigate} from "react-router";
import {CustomerInputModal} from "../components/CustomerInputModal.tsx";
import {SubmitBtnModel} from "../components/SubmitBtnModel.tsx";
import {HeadingModel} from "../components/HeadingModel.tsx";
import {ItemInputModel} from "../components/ItemInputModel.tsx";
import {AddOrUpdateSection} from "./AddOrUpdateSection.tsx";
import {useDispatch} from "react-redux";
import {addCustomer} from "../reducers/CustomerSlice.ts";
import {addItem} from "../reducers/ItemSlice.ts";

export function Add() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    const handleAddCustomer = () => {
        const newCustomer = {id: Math.random().toString(), name, address, email, phone};
        dispatch(addCustomer(newCustomer));
        navigate('/');
    }

    const handleSubmitItem = () => {
        const newItem = {id: Math.random().toString(), name: itemName, description, price};
        dispatch(addItem(newItem));
        navigate('/');
    }

    return (
        <div className="page-container space-y-8">
            <HeadingModel>Add Data</HeadingModel>
            <div className="section-grid">
                <AddOrUpdateSection title="Add Customer">
                    <div className="space-y-6">
                        <form className="space-y-6">
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
                        <div className="flex justify-end">
                            <SubmitBtnModel handleSubmit={handleAddCustomer}>Add Customer</SubmitBtnModel>
                        </div>
                    </div>
                </AddOrUpdateSection>
                <AddOrUpdateSection title="Add Items">
                    <div className="space-y-6">
                        <form className="space-y-6">
                            <ItemInputModel
                                name={itemName}
                                description={description}
                                price={price}
                                setItemName={setItemName}
                                setDescription={setDescription}
                                setPrice={setPrice}
                            />
                        </form>
                        <div className="flex justify-end mt-4">
                            <SubmitBtnModel handleSubmit={handleSubmitItem}>Add Item</SubmitBtnModel>
                        </div>
                    </div>
                </AddOrUpdateSection>
            </div>
        </div>
    );
}
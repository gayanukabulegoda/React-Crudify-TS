import {useContext, useState} from "react";
import {useNavigate} from "react-router";
import {Customer} from "../models/Customer.ts";
import {CustomerContext} from "../components/CustomerProvider.tsx";

export function AddCustomer() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function handleSubmit() {
        const newCustomer = new Customer(name, address, email, phone);
        setCustomers((customers: Customer[]) => [...customers, newCustomer]);
        navigate('/');
    }

    return (
        <>
            <h1>Add Customer</h1>
            <form>
                <input type="text" placeholder="Enter name"
                       onChange={(e) => {setName(e.target.value)}}/>
                <input type="text" placeholder="Enter address"
                       onChange={(e) => {setAddress(e.target.value)}}/>
                <input type="text" placeholder="Enter email"
                       onChange={(e) => {setEmail(e.target.value)}}/>
                <input type="text" placeholder="Enter phone"
                       onChange={(e) => {setPhone(e.target.value)}}/>
            </form>
            <div className="btn-container">
                <button onClick={handleSubmit}>Add Customer</button>
            </div>
        </>
    );
}
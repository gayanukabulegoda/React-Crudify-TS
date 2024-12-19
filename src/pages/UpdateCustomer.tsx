import {useContext, useState} from "react";
import {useNavigate} from "react-router";
import {CustomerContext} from "../components/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";

export function UpdateCustomer() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);
    const [searchEmail, setSearchEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function handleSearch() {
        const customer = customers.find(c => c.email === searchEmail);
        if (customer) {
            setName(customer.name);
            setAddress(customer.address);
            setEmail(customer.email);
            setPhone(customer.phone);
        } else {
            alert('Customer not found');
        }
    }

    function handleUpdate() {
        setCustomers(customers.map(c => c.email === searchEmail ? new Customer(name, address, email, phone) : c));
        navigate('/');
    }

    return (
        <>
            <h1>Update Customer</h1>
            <div className="search-container">
                <input type="text" placeholder="Search by email"
                       onChange={(e) => setSearchEmail(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </div>
            <form>
                <input type="text" placeholder="Enter name" value={name}
                       onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Enter address" value={address}
                       onChange={(e) => setAddress(e.target.value)}/>
                <input type="text" placeholder="Enter email" value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="Enter phone" value={phone}
                       onChange={(e) => setPhone(e.target.value)}/>
            </form>
            <div className="btn-container">
                <button onClick={handleUpdate}>Update Customer</button>
            </div>
        </>
    );
}
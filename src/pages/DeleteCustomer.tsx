import {useContext} from "react";
import {CustomerContext} from "../components/CustomerProvider";

export function DeleteCustomer() {
    const [customers, setCustomers] = useContext(CustomerContext);

    function handleDelete(email: string) {
        setCustomers(customers.filter(c => c.email !== email));
    }

    return (
        <>
            <h1>Delete Customer</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer, index) => (
                    <tr key={index}>
                        <td>{customer.name}</td>
                        <td>{customer.address}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td><button onClick={() => handleDelete(customer.email)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
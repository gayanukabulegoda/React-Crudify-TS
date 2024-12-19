import {useContext} from "react";
import {CustomerContext} from "../components/CustomerProvider.tsx";

export function Dashboard() {
    const [customers, setCustomers] = useContext(CustomerContext);

    return (
        <>
            <h1>Dashboard</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer, index) => (
                    <tr key={index}>
                        <td>{customer.name}</td>
                        <td>{customer.address}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
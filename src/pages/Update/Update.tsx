import {useState} from "react";
import {useNavigate} from "react-router";
import {Customer} from "../../models/Customer.ts";
import {Item} from "../../models/Item.ts";
import {CustomerInputModal} from "../../components/CustomerInputModal.tsx";
import {SubmitBtnModel} from "../../components/SubmitBtnModel.tsx";
import {HeadingModel} from "../../components/HeadingModel.tsx";
import {ItemInputModel} from "../../components/ItemInputModel.tsx";
import {AddOrUpdateSection} from "../AddOrUpdateSection.tsx";
import {SearchBar} from "./SearchBar.tsx";
import {useDispatch, useSelector} from "react-redux";
import {updateCustomer} from "../../reducers/CustomerSlice.ts";
import {updateItem} from "../../reducers/ItemSlice.ts";

export function Update() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const customers = useSelector((state: { customers: Customer[] }) => state.customers);
    const items = useSelector((state: { items: Item[] }) => state.items);
    const [searchEmail, setSearchEmail] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [searchItemName, setSearchItemName] = useState('')
    const [itemId, setItemId] = useState('');
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    const handleSearchCustomer = () => {
        const customer: Customer | undefined = customers.find((c: Customer) => c.email === searchEmail);
        if (customer !== undefined && customer !== null) {
            setCustomerId(customer.id);
            setName(customer.name);
            setAddress(customer.address);
            setEmail(customer.email);
            setPhone(customer.phone);
        } else alert('Customer not found');
    }

    const handleSearchItem = () => {
        const item: Item | undefined = items.find((i: Item) => i.name === searchItemName);
        if (item !== undefined && item !== null) {
            setItemId(item.id);
            setItemName(item.name);
            setDescription(item.description);
            setPrice(item.price);
        } else alert('Item not found!')
    }

    const handleUpdateCustomer = () => {
        dispatch(updateCustomer({id: customerId, name, address, email, phone}));
        navigate('/');
    }

    const handleUpdateItem = () => {
        dispatch(updateItem({id: itemId, name: itemName, description, price}));
        navigate('/');
    }

    return (
        <div className="page-container space-y-8">
            <HeadingModel>Update Data</HeadingModel>
            <div className="section-grid">
                <AddOrUpdateSection title="Update Customer">
                    <div className="space-y-6">
                        <SearchBar
                            placeholder="Search by email"
                            value={searchEmail}
                            onChange={setSearchEmail}
                            onSearch={handleSearchCustomer}
                        />
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
                            <SubmitBtnModel handleSubmit={handleUpdateCustomer}>Update Customer</SubmitBtnModel>
                        </div>
                    </div>
                </AddOrUpdateSection>
                <AddOrUpdateSection title="Update Item">
                    <div className="space-y-6">
                        <SearchBar
                            placeholder="Search by item name"
                            value={searchItemName}
                            onChange={setSearchItemName}
                            onSearch={handleSearchItem}
                        />
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
                        <div className="flex justify-end">
                            <SubmitBtnModel handleSubmit={handleUpdateItem}>Update Item</SubmitBtnModel>
                        </div>
                    </div>
                </AddOrUpdateSection>
            </div>
        </div>
    );
}
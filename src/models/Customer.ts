export class Customer {
    name: string;
    address: string;
    email: string;
    phone: string;

    constructor(name: string, address: string, email: string, phone: string) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }
}
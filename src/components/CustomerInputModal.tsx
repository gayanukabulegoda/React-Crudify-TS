interface InputModalProps {
    name: string;
    address: string;
    email: string;
    phone: string;
    setName: (name: string) => void;
    setAddress: (address: string) => void;
    setEmail: (email: string) => void;
    setPhone: (phone: string) => void;
}

export function CustomerInputModal(props: InputModalProps) {
    return (
        <>
            <input
                type="text"
                placeholder="Enter name"
                value={props.name}
                onChange={(e) => {
                    props.setName(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder="Enter address"
                value={props.address}
                onChange={(e) => {
                    props.setAddress(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder="Enter email"
                value={props.email}
                onChange={(e) => {
                    props.setEmail(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder="Enter phone"
                value={props.phone}
                onChange={(e) => {
                    props.setPhone(e.target.value)
                }}
            />
        </>
    );
}
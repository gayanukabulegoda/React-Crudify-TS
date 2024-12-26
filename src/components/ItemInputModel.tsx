interface InputModelProps {
    name: string;
    description: string;
    price: number;
    setItemName: (name: string) => void;
    setDescription: (description: string) => void;
    setPrice: (price: number) => void;
}

export const ItemInputModel = (props: InputModelProps) => {
    return (
        <>
            <input
                type="text"
                placeholder="Enter name"
                value={props.name}
                onChange={(e) => {
                    props.setItemName(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder="Enter description"
                value={props.description}
                onChange={(e) => {
                    props.setDescription(e.target.value)
                }}
            />
            <input
                type="number"
                placeholder="Enter price"
                value={props.price}
                onChange={(e) => {
                    props.setPrice(Number(e.target.value))
                }}
            />
        </>
    );
};
interface HeadingModelProps {
    children: string;
}

export function HeadingModel(props: HeadingModelProps) {
    return (
        <>
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{props.children}</h1>
        </>
    );
}
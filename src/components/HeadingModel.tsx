interface HeadingModelProps {
    children: string;
}

export function HeadingModel(props: HeadingModelProps) {
    return (
        <h1 className="section-heading">
            {props.children}
        </h1>
    );
}
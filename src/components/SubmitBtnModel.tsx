interface SubmitBtnModelProps {
    handleSubmit: () => void;
    children: string;
}

export function SubmitBtnModel(props: SubmitBtnModelProps) {
    return (
        <button className="submit-button" onClick={props.handleSubmit}>
            {props.children}
        </button>
    );
}
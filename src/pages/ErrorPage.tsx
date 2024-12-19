import {Link} from "react-router";

export const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>Error Occurred!</h1>
            <p>Sorry, an error occurred. Please try again later.</p>
            <ul>
                <li>
                    <Link to={'/'} className="back-link">Go Back</Link>
                </li>
            </ul>
        </div>
    );
};
import {Link} from "react-router";

export const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-8 rounded-lg">
            <h1 className="text-4xl text-red-600 mb-4">Error Occurred!</h1>
            <p className="text-xl mb-8">Sorry, an error occurred. Please try again later.</p>
            <ul className="list-none p-0">
                <li>
                    <Link to={'/'} className="text-blue-500 no-underline text-xl border border-blue-500 py-2 px-4 rounded transition duration-300 hover:bg-blue-500 hover:text-white">Go Back</Link>
                </li>
            </ul>
        </div>
    );
};
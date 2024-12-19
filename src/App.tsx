import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./pages/Dasboard.tsx";
import {AddCustomer} from "./pages/AddCustomer.tsx";
import {ErrorPage} from "./pages/ErrorPage.tsx";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";
import {DeleteCustomer} from "./pages/DeleteCustomer.tsx";
import {RootLayout} from "./components/RootLayout.tsx";
import {CustomerProvider} from "./components/CustomerProvider.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout/>,
            children: [
                {path: '/', element: <Dashboard/>},
                {path: '/add', element: <AddCustomer/>},
                {path: '/update', element: <UpdateCustomer/>},
                {path: '/delete', element: <DeleteCustomer/>},
            ]
        },

        {path: '*', element: <ErrorPage/>}
    ]);
    return (
        <>
            <CustomerProvider>
                <RouterProvider router={routes}></RouterProvider>
            </CustomerProvider>
        </>
    )
}

export default App
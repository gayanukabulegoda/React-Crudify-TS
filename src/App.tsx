import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./pages/Dasboard.tsx";
import {Add} from "./pages/Add.tsx";
import {Error} from "./pages/Error.tsx";
import {Update} from "./pages/Update.tsx";
import {Delete} from "./pages/Delete.tsx";
import {RootLayout} from "./components/RootLayout.tsx";
import {CustomerProvider} from "./store/CustomerProvider.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout/>,
            children: [
                {path: '/', element: <Dashboard/>},
                {path: '/add', element: <Add/>},
                {path: '/update', element: <Update/>},
                {path: '/delete', element: <Delete/>},
            ]
        },

        {path: '*', element: <Error/>}
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
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./pages/Dashboard/Dasboard.tsx";
import {Add} from "./pages/Add.tsx";
import {Error} from "./pages/Error.tsx";
import {Update} from "./pages/Update/Update.tsx";
import {Delete} from "./pages/Delete.tsx";
import {RootLayout} from "./components/RootLayout.tsx";

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
            <RouterProvider router={routes}></RouterProvider>
        </>
    )
}

export default App
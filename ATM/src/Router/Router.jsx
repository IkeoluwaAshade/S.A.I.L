import { createBrowserRouter } from "react-router-dom";
import WebLayout from "./WebLayout";
import LandingPage from "../pages/LandingPage/LandingPage";
import NewUser from "../pages/NewUsers/NewUser";
import ExistingUser from "../pages/ExistingUsers/ExistingUser";

export const mainRoute = createBrowserRouter([
    {
        element: <WebLayout />,
        children: [
            { path: '/', element: <LandingPage /> },
            { path: '/newUser', element: <NewUser /> },
            { path: 'existingUser', element: <ExistingUser /> },
        ]
    }
])
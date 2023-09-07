import { useRoutes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AuthLayout from "../layouts/auth";

export default function Router() {
    let routes = useRoutes([
        {
            path: "/auth",
            element: <AuthLayout/>,
            children: [
                { path: "login", element: <Login /> },
                { path: "register", element: <Register />}
            ],
        }
    ])

    return routes;
}
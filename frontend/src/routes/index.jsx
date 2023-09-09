import { Navigate, useRoutes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AuthLayout from "../layouts/auth";
import Dashboard from "../pages/dashboard/Dashboard";
import { DEFAULT_PATH } from "../config";
import Group from "../pages/dashboard/Group";

export default function Router() {
    let routes = useRoutes([
        {
            path: "/auth",
            element: <AuthLayout/>,
            children: [
                { path: "login", element: <Login /> },
                { path: "register", element: <Register />}
            ],
        },
        {
            path: "/",
            children: [
                { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
                { path: "app", element: <Dashboard/> },
                { path: "group", element: <Group/> },
            ]
        }
    ])

    return routes;
}
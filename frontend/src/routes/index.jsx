import { Navigate, useRoutes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AuthLayout from "../layouts/auth";
import Dashboard from "../pages/dashboard/Dashboard";
import { DEFAULT_PATH } from "../config";
import Group from "../pages/dashboard/Group";
import DashboardLayout from "../layouts/dashboard";
import Settings from "../pages/dashboard/Settings";

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
            element: <DashboardLayout/>,
            children: [
                { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
                { path: "app", element: <Dashboard/> },
                { path: "group", element: <Group/> },
                { path: "settings", element: <Settings/> },
            ]
        }
    ])

    return routes;
}
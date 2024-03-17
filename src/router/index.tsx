import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomePage, LoginPage } from "../pages";
import { Layout } from "@/components/Layout/Layout";

const routes = [
    {
        path: "",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
];

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: routes.map((route) => ({
            path: route.path,
            element: route.element,
        })),
    },
]);

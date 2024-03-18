import { Navigate, createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomePage, LoginPage } from "../pages";
import { Layout } from "@/components/Layout/Layout";
import { Giveaways } from "@/pages/Giveaways/Giveaways";
import { useAppStore } from "@/stores/appStore/useAppStore";
import { Giveaway } from "@/pages/Giveaways/[id]/Giveaway";
import { Dash } from "@/pages/Dash/Dash";
import { DashUsers } from "@/pages/Dash/pages/Users/Users";
import { DashGiveaways } from "@/pages/Dash/pages/Giveaways/Giveaways";

interface Route {
    Element: JSX.Element;
    path: string;
    type: "public" | "private";
}

const routes: Route[] = [
    {
        path: "",
        type: "public",
        Element: <HomePage />,
    },
    {
        path: "/login",
        type: "public",
        Element: <LoginPage />,
    },
    {
        path: "/giveaways",
        type: "public",
        Element: <Giveaways />,
    },
    {
        path: "/giveaways/:id",
        type: "public",
        Element: <Giveaway />,
    },
    {
        path: "/dash",
        type: "private",
        Element: <Dash />,
    },
    {
        path: "/dash/users",
        type: "private",
        Element: <DashUsers />,
    },
    {
        path: "/dash/giveaways",
        type: "private",
        Element: <DashGiveaways />,
    },
];

const ProtectedRoute = (route: Route) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { token } = useAppStore();

    if (route.type === "private" && token) return route.Element;
    if (route.type === "private" && !token) return <Navigate to="/login" />;
    return route.Element;
};

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: routes.map((route) => ({
            path: route.path,
            element: (
                <ProtectedRoute
                    path={route.path}
                    Element={route.Element}
                    type={route.type}
                />
            ),
        })),
    },
]);

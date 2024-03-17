import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./stores/ThemeProvider/ThemeProvider";

import { AppRouter } from "./router";
import { TanStackProvider } from "./plugins/TanStackProvider";

export const App = () => {
    return (
        <TanStackProvider>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <RouterProvider router={AppRouter} />
            </ThemeProvider>
        </TanStackProvider>
    );
};

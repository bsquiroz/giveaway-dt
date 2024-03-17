import { RouterProvider } from "react-router-dom";

import { AppRouter } from "./router";
import { TanStackProvider } from "./plugins/TanStackProvider";

export const App = () => {
    return (
        <TanStackProvider>
            <RouterProvider router={AppRouter} />
        </TanStackProvider>
    );
};

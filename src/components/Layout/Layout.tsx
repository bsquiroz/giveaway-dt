import { ModeToggle } from "../ModoToggle/ModoToggle";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <main className="bg-background text-primary-foreground">
            <section className="min-h-screen max-w-2xl m-auto p-5">
                <Outlet />
            </section>
            <ModeToggle />
        </main>
    );
};

import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="bg-background text-foreground">
                <section className="min-h-screen max-w-2xl m-auto p-5 pt-[90px]">
                    <Outlet />
                </section>
                <Toaster richColors />
            </main>
        </>
    );
};

import { Toaster } from "@/components/ui/sonner"
import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar/Navbar"

export const Layout = () => {
    return (
        <>
            <div className="absolute top-0 lef-0 w-full h-96 bg-[linear-gradient(0deg,rgba(3,0,26,1)25%,rgba(3,0,26,0.7557073854932598)100%),url('/bg.jpg')] bg-cover z-0"></div>
            <Navbar />
            <main className="relative text-foreground">
                <section className="min-h-screen max-w-2xl m-auto p-5 pt-[90px]">
                    <Outlet />
                </section>
                <Toaster richColors />
            </main>
        </>
    )
}

import { Settings } from "../Settings/Settings";
import { ModeToggle } from "../ModoToggle/ModoToggle";
import { useAppStore } from "@/stores/appStore/useAppStore";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const { token, user } = useAppStore();
    return (
        <header className="fixed w-full p-5 bg-background h-[80px] flex z-50">
            <div className="flex flex-1 justify-between max-w-2xl m-auto items-center">
                <span className="text-2xl font-bold text-primary">
                    <Link to={"/"}>CodeBusters</Link>
                </span>

                <div className="flex items-center gap-2">
                    {user && token && <Settings />}

                    <ModeToggle />
                </div>
            </div>
        </header>
    );
};

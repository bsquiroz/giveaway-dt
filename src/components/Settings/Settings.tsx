import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppStore } from "@/stores/appStore/useAppStore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
    const navigate = useNavigate();
    const { setToken, setUser } = useAppStore();

    const handleLogout = () => {
        setToken(null);
        setUser(null);

        toast.success("Sesion cerrada correctamente");

        navigate("/login");
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate("/dash")}>
                    Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/")}>
                    Home
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="bg-red-500">
                    Cerrar sesion
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

import { CellContext } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DataColumn } from "../../interfaces";
import { useAppStore } from "@/stores/appStore/useAppStore";
import { useDash } from "@/hooks/useDash";
import { toast } from "sonner";

export const CellSettingUser = ({ row }: CellContext<DataColumn, unknown>) => {
    const { token } = useAppStore();
    const { queryDeleteUser } = useDash({ token });

    function handleDelete(id: string | number) {
        queryDeleteUser
            .mutateAsync(id)
            .then(() =>
                toast.success("Usuario dado de baja satisfactoriamente")
            )
            .catch(() => toast.error("ocurrio un error"));
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleDelete(row.id)}>
                    Eliminar usuario
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

import { DataTable } from "@/components/DataTable/DataTable";
import { Spinner } from "@/components/Spinner/Spinner";
import { useDash } from "@/hooks/useDash";
import { useAppStore } from "@/stores/appStore/useAppStore";

import { ColumnDef } from "@tanstack/react-table";
import { DataColumn } from "../../interfaces";
import { CellSettingUser } from "../CellSettingUser/CellSettingUser";

const columns: ColumnDef<DataColumn>[] = [
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "fullname",
        header: "Fullname",
    },
    {
        id: "actions",
        cell: (row) => CellSettingUser(row),
    },
];

export const DataTableUser = () => {
    const { token } = useAppStore();
    const { queryGetUsers } = useDash({ token });

    if (queryGetUsers.isLoading) return <Spinner />;

    return (
        <div>
            <DataTable columns={columns} data={queryGetUsers.data!} />
        </div>
    );
};

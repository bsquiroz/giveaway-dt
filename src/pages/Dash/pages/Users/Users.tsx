import { DataTableUser } from "./components/DataTableUser/DataTableUser";
import { FormUser } from "./components/FormUser/FormUser";

export const DashUsers = () => {
    return (
        <div className="grid gap-4">
            <h2>Usuarios</h2>
            <FormUser />
            <DataTableUser />
        </div>
    );
};

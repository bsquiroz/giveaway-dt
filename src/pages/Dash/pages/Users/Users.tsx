import { DataTableUser } from "./components/DataTableUser/DataTableUser";
import { FormUser } from "./components/FormUser/FormUser";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const DashUsers = () => {
    return (
        <div className="grid gap-4">
            <h2 className="text-center uppercase font-bold text-2xl">
                Usuarios
            </h2>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Registrar un usuario</AccordionTrigger>
                    <AccordionContent>
                        <FormUser />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <DataTableUser />
        </div>
    );
};

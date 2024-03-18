import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const options = [
    {
        id: 0,
        path: "/dash/users",
        text: "Usuarios",
    },
    {
        id: 1,
        path: "/dash/giveaways",
        text: "Sorteos",
    },
];

export const Dash = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Panel administrativo</h2>
            <div className="flex flex-col gap-5 mt-4">
                {options.map((opt) => {
                    return (
                        <Button
                            variant={"outline"}
                            onClick={() => navigate(opt.path)}
                            key={opt.id}
                        >
                            {opt.text}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};

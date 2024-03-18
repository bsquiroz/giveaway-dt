import { useForm, SubmitHandler } from "react-hook-form";
import { DataFormUser } from "../../interfaces";
import { toast } from "sonner";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/stores/appStore/useAppStore";
import { useDash } from "@/hooks/useDash";

export const FormUser = () => {
    const { register, handleSubmit, reset } = useForm<DataFormUser>();
    const { token } = useAppStore();

    const { queryCreateUser } = useDash({ token });

    const onSubmit: SubmitHandler<DataFormUser> = (data) => {
        if (Object.values(data).some((v) => v === ""))
            return toast.error(
                "Todos los campos en este formulario son necesarios!"
            );

        queryCreateUser
            .mutateAsync(data)
            .then((data) => {
                if (data.message === "Usuario creado correctamente.") {
                    toast.success(data.message);
                    reset();
                }
            })
            .catch(() => {
                return toast.error("ocurrio un error");
            });
    };

    return (
        <section>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-1 flex-col gap-5"
            >
                <div className="grid w-full max-w-sm items-center gap-1.5 m-auto">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        {...register("email")}
                    />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5 m-auto">
                    <Label htmlFor="fullname">Fullname</Label>
                    <Input
                        type="text"
                        id="fullname"
                        placeholder="john doe"
                        {...register("fullname")}
                    />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5 m-auto">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        id="password"
                        placeholder="****"
                        {...register("password")}
                    />
                </div>
                <Button>Registrar</Button>
            </form>
        </section>
    );
};

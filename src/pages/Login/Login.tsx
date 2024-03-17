import { Spinner } from "@/components/Spinner/Spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginAdm } from "@/hooks/useLoginAdm";
import { LoginData } from "@/interfaces";
import { useAppStore } from "@/stores/appStore/useAppStore";

import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const LoginPage = () => {
    const navigate = useNavigate();
    const { setUser, setToken } = useAppStore();

    const { register, handleSubmit } = useForm<LoginData>({
        defaultValues: {
            email: "john@gmail.com",
            password: "John12345*",
        },
    });
    const { mutationLoginAdm } = useLoginAdm();

    const onSubmit: SubmitHandler<LoginData> = (data) => {
        if (Object.values(data).some((v) => v === ""))
            return toast.error(
                "Todos los campos en este formulario son necesarios!"
            );

        mutationLoginAdm
            .mutateAsync(data)
            .then((response) => {
                toast.success(
                    `Sesion iniciada, bienvenido ${response.user.fullname}`
                );
                setToken(response.token);
                setUser(response.user);

                navigate("/giveaways");
            })
            .catch(() => {
                return toast.error("Ocurrio un error, intenta mas tarde");
            });
    };

    return (
        <>
            {mutationLoginAdm.isLoading && <Spinner />}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
            >
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        {...register("email")}
                    />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        id="password"
                        placeholder="****"
                        {...register("password")}
                    />
                </div>
                <div>
                    <Button>Ingresar</Button>
                </div>
            </form>
        </>
    );
};

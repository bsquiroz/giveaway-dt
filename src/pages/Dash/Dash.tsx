import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";

interface RegisterData {
    email: string;
    fullname: string;
    password: string;
}

export const Dash = () => {
    const { register, handleSubmit } = useForm<RegisterData>();

    const onSubmit: SubmitHandler<RegisterData> = () => {};

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-1 flex-col gap-5"
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

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="fullname">Fullname</Label>
                    <Input
                        type="text"
                        id="fullname"
                        placeholder="mariano pez"
                        {...register("fullname")}
                    />
                </div>
                <div>
                    <Button>Registrar</Button>
                </div>
            </form>
        </div>
    );
};

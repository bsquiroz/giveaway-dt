import { useCreateParticipant } from "@/hooks/useCreateParticipant";
import { CreateParticipantRes } from "@/interfaces";
import { ReactNode, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import VerifySuccess from "./components/VerifySuccess";
import VerifyLoading from "./components/VerifyLoading";
import VerifyError from "./components/VerifyError";

enum VerifyStatus {
    loading = 'LOADING',
    success = 'SUCCESS',
    error = 'ERROR',
}

const VerifyDiscord = () => {

    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const [status, setStatus] = useState<VerifyStatus>(VerifyStatus.loading);
    const [response, setResponse] = useState<CreateParticipantRes | null>(null);
    const [error, setError] = useState<string | ReactNode>("");

    const { mutationCreateParticipant } = useCreateParticipant();

    useEffect(() => { register() }, []);

    const giveawayId = +(localStorage.getItem('giveawayId') || "0");

    const register = () => {
        if (!giveawayId || !code) {
            setStatus(VerifyStatus.error);
            return;
        }
        const redirectUri = window.location.origin + '/verify-discord';
        mutationCreateParticipant.mutateAsync({
            code, giveawayId, redirectUri
        })
            .then(res => {
                setStatus(VerifyStatus.success)
                setResponse(res);
            })
            .catch(error => {
                const message = error.response?.data?.message as string;
                setStatus(VerifyStatus.error);
                if (message.includes('Invalid Discord Code')){
                    setError("Código de Discord inválido");
                }
                else if (message.includes('Duplicate fields')) {
                    setError("Ya te encuentras registrado en el sorteo!");
                }
                else if (message.includes("User isn't in DevTalles")) {
                    setError(<>
                        <p>Tu usuario de Discord no forma parte de la comunidad de devtalles</p>
                        <p>Puedes unirte haciendo clic {" "}
                            <a 
                                href="https://discord.com/invite/pBjEVYTC7t"
                                target="_blank"
                                className="text-primary"
                            >
                                    Aquí
                            </a>
                        </p>
                    </>)
                }
                console.log(error);
            })
    }

    if (status === VerifyStatus.loading) {
        return <VerifyLoading />
    }

    if (status === VerifyStatus.success && response){

        return <VerifySuccess response={response} />
    }

    return <VerifyError error={error} giveawayId={giveawayId} />
}

export default VerifyDiscord

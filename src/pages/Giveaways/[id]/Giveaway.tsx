import { Spinner } from "@/components/Spinner/Spinner";
import { Button } from "@/components/ui/button";
import { useGetGiveaway } from "@/hooks/useGetGiveaway";
import { formatDate } from "@/lib/utils";
import { ErrorPage } from "@/pages";
import { useParams } from "react-router-dom";

export const Giveaway = () => {
    const { id } = useParams();

    const { queryGetGiveaway } = useGetGiveaway(id!);

    if (queryGetGiveaway.isLoading) return <Spinner />;
    if (!queryGetGiveaway?.data) return <ErrorPage />;

    const { description, giveawayDate, image, participantsLimit, title } =
        queryGetGiveaway.data;

    const discordRedirect = () => {
        if (!id) return;
        const frontUrl = window.location.origin + '/verify-discord';
        const encodedUrl = encodeURIComponent(frontUrl);
        window.location.href = `https://discord.com/oauth2/authorize?client_id=1217239373360271491&response_type=code&redirect_uri=${encodedUrl}&scope=identify+guilds.members.read+email`;
        localStorage.setItem('giveawayId', id);
    }

    return (
        <article className="grid gap-4">
            <figure>
                <img src={image} alt={title} />
            </figure>
            <h2 className="font-bold text-xl">{title}</h2>
            <p>
                Numero de participantes:{" "}
                <span>
                    {participantsLimit === -1 ? "Infinito" : participantsLimit}
                </span>
            </p>
            <p>{description}</p>
            <p>Fecha del sorteo: {formatDate({date: giveawayDate, withHour: true})}</p>

            <Button className="flex gap-2" onClick={discordRedirect}>
                <img src="/discord-icon.svg" alt="discord-icon" className="w-[24px]" />
                Registrarme en el sorteo
            </Button>
        </article>
    );
};

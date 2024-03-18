import { Spinner } from "@/components/Spinner/Spinner";
import { Button } from "@/components/ui/button";
import { useGetGiveaway } from "@/hooks/useGetGiveaway";
import { useGetPrizes } from "@/hooks/useGetPrizes";
import { formatDate } from "@/lib/utils";
import { ErrorPage } from "@/pages";
import { useParams } from "react-router-dom";
import PrizeItem from "./components/PrizeItem";

export const Giveaway = () => {
    const { id } = useParams();

    const { queryGetGiveaway } = useGetGiveaway(id!);
    const { queryGetPrizes } = useGetPrizes(id!);

    if (queryGetGiveaway.isLoading || queryGetPrizes.isLoading) return <Spinner />;
    if (!queryGetGiveaway?.data || !queryGetPrizes?.data) return <ErrorPage />;

    const prizes = queryGetPrizes.data;

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

            <p><b>Fecha del sorteo:</b> {formatDate({date: giveawayDate, withHour: true})}</p>

            <p>
                <b>Límite de participantes:</b>{" "}
                <span>
                    {participantsLimit === -1 ? "Sin límite" : participantsLimit}
                </span>
            </p>
            <p>{description}</p>

            <strong>Premios:</strong>
            <div className="sm:grid grid-cols-2 gap-4 mb-8">
                {prizes.map(prize => (
                    <PrizeItem prize={prize} />
                ))}
            </div>

            <Button className="flex gap-2 mb-8" onClick={discordRedirect}>
                <img src="/discord-icon.svg" alt="discord-icon" className="w-[24px]" />
                Registrarme en el sorteo
            </Button>
        </article>
    );
};

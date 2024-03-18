import { Spinner } from "@/components/Spinner/Spinner";
import { Button } from "@/components/ui/button";
import { useGetGiveaway } from "@/hooks/useGetGiveaway";
import { ErrorPage } from "@/pages";
import { useParams } from "react-router-dom";

export const Giveaway = () => {
    const { id } = useParams();

    const { queryGetGiveaway } = useGetGiveaway(id!);

    if (queryGetGiveaway.isLoading) return <Spinner />;
    if (!queryGetGiveaway?.data) return <ErrorPage />;

    const { description, giveawayDate, image, participantsLimit, title } =
        queryGetGiveaway.data;

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
            <p>Fecha del sorteo: {giveawayDate}</p>

            <Button>Registrarme en el sorteo</Button>
        </article>
    );
};

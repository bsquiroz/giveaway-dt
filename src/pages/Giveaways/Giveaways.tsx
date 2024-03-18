import { Spinner } from "@/components/Spinner/Spinner";
import { useGetGiveaways } from "@/hooks/useGetGiveaways";
import { Link } from "react-router-dom";

export const Giveaways = () => {
    const { queryGetGiveaways } = useGetGiveaways();

    if (queryGetGiveaways.isLoading) return <Spinner />;
    return (
        <div>
            <h2>Sorteos</h2>

            <section className="sm:grid grid-cols-2 gap-5">
                {queryGetGiveaways.data?.results.map((giveaway) => {
                    if (giveaway.status === "ACTIVE") {
                        return (
                            <Link to={`/giveaways/${giveaway.giveawayId}`}>
                                <article
                                    key={giveaway.giveawayId}
                                    className="p-3 bg-slate-900 rounded-md cursor-pointer"
                                >
                                    <figure className="aspect-square rounded-md overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={giveaway.image}
                                            alt={giveaway.title}
                                        />
                                    </figure>

                                    <h3>{giveaway.title}</h3>
                                </article>
                            </Link>
                        );
                    }
                })}
            </section>
        </div>
    );
};

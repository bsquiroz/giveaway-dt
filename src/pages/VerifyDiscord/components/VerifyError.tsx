import { OctagonX } from "lucide-react"
import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface VerifyErrorProps {
    error: string | ReactNode,
    giveawayId: number
}

const VerifyError = ({ error, giveawayId }: VerifyErrorProps) => {
    return (
        <div className="flex flex-col gap-4 mt-32 md:flex-row md:gap-12">
            <OctagonX size={100} className="text-red-500" />
            <div>
                <div className="text-center md:text-left mb-7 text-3xl block font-semibold ">
                    Hubo un error
                </div>
                <p className="text-center md:text-left mb-5">
                    {error}
                </p>
                <Link
                    to={'/giveaways/' + giveawayId}
                    className="block text-center md:text-left underline text-slate-500"
                >
                    Intentalo nuevamente
                </Link>
            </div>
        </div>
    )
}

export default VerifyError
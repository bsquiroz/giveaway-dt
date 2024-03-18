import { CreateParticipantRes } from '@/interfaces'
import { BadgeCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

interface VerifySuccessProps {
    response: CreateParticipantRes
}

const VerifySuccess = ({ response }: VerifySuccessProps) => {
    return (
        <div className="flex flex-col gap-4 mt-32 md:flex-row md:gap-12">
            <BadgeCheck size={100} className="text-green-500" />
            <div>
                <div className="text-center md:text-left mb-7 text-3xl block font-semibold ">
                    Bien hecho {" "}
                    <span className="font-bold">{response.fullname}</span>
                </div>
                <p className="text-center md:text-left mb-5">
                    Te has registrado exitosamente en
                    <b className="block">{response.giveaway.title}</b>
                </p>
                <Link
                    to='/giveaways'
                    className="block text-center md:text-left underline text-slate-500"
                >
                    Ver más sorteos
                </Link>
            </div>
        </div>
    )
}

export default VerifySuccess
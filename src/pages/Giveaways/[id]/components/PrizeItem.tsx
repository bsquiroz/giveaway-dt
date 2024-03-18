import { Prize } from '@/interfaces'
import { X } from 'lucide-react'

interface PrizeItemProps {
    prize: Prize
}

const PrizeItem = ({ prize }: PrizeItemProps) => {
    return (
        <div className='flex h-[70px] gap-3 border border-solid border-slate-700 rounded overflow-hidden'>
            <div className='w-1/4'>
                <img src={prize.image} alt={prize.name} className='object-cover w-full h-full'/>
            </div>
            <div className='w-3/4 flex items-center gap-2 pe-3'>
                <span className='inline'>{prize.name}</span> 
                <span className='inline-flex items-center gap-1 text-slate-400'>
                    <X size={10}/> {prize.quantity}
                </span> 
            </div>
        </div>

    )
}

export default PrizeItem
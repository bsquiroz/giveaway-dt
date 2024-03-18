import { Pencil2Icon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { useGetGiveawaysAdmin } from "@/hooks/useGetGiveawaysAdmin"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Dialog,
    DialogTrigger,
    DialogContent
} from "@/components/ui/dialog"
import { AddEdit } from '@/components/AddEdit/AddEdit'

export const DashGiveaways = () => {
    const { queryGetGiveaways } = useGetGiveawaysAdmin()
    return (
        <div>
            <div className='flex justify-between items-center mb-10'>
                <h2 className='text-2xl font-semibold'>Giveaways</h2>
                <div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <Pencil2Icon className="mr-2 h-4 w-4" /> Crear nuevo sorteo
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <AddEdit />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div>
                <h3 className='text-xl font-semibold mb-4'>Todos los Sorteos</h3>
                <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 mb-10'>
                    {queryGetGiveaways.data?.results.map((giveaway) => {
                        return (
                            <Card key={giveaway.giveawayId}>
                                <CardHeader className='w-full h-56 overflow-hidden'>
                                    <img src={giveaway.image} alt={giveaway.title} className='w-full h-full object-cover' />
                                </CardHeader>
                                <CardContent>
                                    <CardTitle className='text-sm'>
                                        {giveaway.title}
                                    </CardTitle>
                                </CardContent>
                                <CardFooter>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="ghost">
                                                <Pencil1Icon className="h-4 w-4" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <AddEdit giveaway={giveaway} />
                                        </DialogContent>
                                    </Dialog>

                                    <Button variant="ghost">
                                        <TrashIcon className="h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

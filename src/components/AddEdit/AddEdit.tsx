import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
  Giveaway,
} from "@/interfaces"

interface AddEditProps {
  giveaway?: Giveaway
}

const formSchema = z.object({
  title: z.string().min(2, {
    message: "El titulo debe contener al menos 2 caracteres o más.",
  }),
  description: z.string().min(15, {
    message: "La descripción debe contener al menos 15 caracteres o más.",
  }),
  giveawayDate: z.string(),
  image: z.string(),
  participantsLimit: z.string(),
  status: z.string(),
})

export function AddEdit ({ giveaway }: AddEditProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: giveaway || {
      title: '',
      description: '',
      giveawayDate: '',
      image: '',
      participantsLimit: 0,
      status: ''
    }
  })

  console.log(giveaway)

  const fields = [
    { name: 'title', label: 'Titulo', placeholder: 'Titulo del sorteo', type: 'text', required: form.register('title') },
    { name: 'description', label: 'Descripción', placeholder: 'Descripción del sorteo', type: 'text', required: form.register('description') },
    { name: 'giveawayDate', label: 'Fecha del sorteo', placeholder: 'Fecha del sorteo', type: 'date', required: form.register('giveawayDate') },
    { name: 'image', label: 'Imagen', placeholder: 'Imagen del sorteo', type: 'file', required: form.register('image') },
    { name: 'participantsLimit', label: 'Limite de participantes', placeholder: 'Limite de participantes', type: 'number', required: form.register('participantsLimit') },
    { name: 'status', label: 'Estado', placeholder: 'Estado del sorteo', type: 'text', required: form.register('status') },
  ]

  function onSubmit (values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle className='text-sm'>{giveaway?.title}</DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {fields.map((item) => {
            return (
              <FormField
                key={item?.name}
                name={item?.name}
                control={form.control}
                render={({ field }) => {
                  console.log(field)
                  return (
                    (
                      <FormItem>
                        <FormLabel>{item?.label}</FormLabel>
                        <FormControl>
                          <>
                            {giveaway ? (
                              <>{
                                item.type === 'file' && (
                                  <>
                                    <img src={giveaway?.image} alt={giveaway?.title} className='w-full h-56 object-cover mb-4' />
                                    <Input
                                      type={item.type}
                                      placeholder={item.placeholder}
                                    />
                                  </>
                                )
                              }</>
                            ) : (
                              <>{
                                item.type === 'file' && !giveaway && (
                                  <>
                                    <Input
                                      type={item.type}
                                      placeholder={item.placeholder}
                                      {...field}
                                    />
                                  </>
                                )
                              }</>
                            )}
                            {item.type !== 'file' && (
                              <Input
                                type={item.type}
                                placeholder={item.placeholder}
                                {...field}
                              />
                            )}
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ))
                }
                }
              />
            )
          })}
          <Button type="submit">{giveaway ? 'Actualizar' : 'Agregar'}</Button>
        </form>
      </Form>
    </>
  )
}
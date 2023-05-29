import {z} from "zod"

export const ContactSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z.string().nonempty("Email é obrigatório").email("Insira email válido").max(127),
    telephone: z.string().nonempty("Telefone é obrigatório").min(13, "No mínimo 13 caracteres!").max(13, "No máximo 13 caracteres!")
})

export type contactData = z.infer<typeof ContactSchema>
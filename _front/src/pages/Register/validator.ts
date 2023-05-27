import {z} from "zod"

export const RegisterSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório!"),
    email: z.string().nonempty("Email é obrigatório!").email("Insira email válido").max(127),
    password: z.string().nonempty("Senha é obrigatória!"),
    telephone: z.string().nonempty("telefone é obrigatório!").min(13, "No mínimo 13 caracteres").max(13, "No máximo 13 caracteres")
})

export type RegisterData = z.infer<typeof RegisterSchema>
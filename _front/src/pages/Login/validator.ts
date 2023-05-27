import {z} from "zod"

export const loginSchema = z.object({
    email: z.string().nonempty("Email é obrigatório").email("Insira email válido").max(127),
    password: z.string().nonempty("Senha é obrigatória")
})

export type LoginData = z.infer<typeof loginSchema>
import {z} from "zod"

export const RegisterSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório!"),
    email: z.string().nonempty("Email é obrigatório!").email("Insira email válido").max(127),
    password: z.string().nonempty("Senha é obrigatória!"),
    confirmPassword: z.string().nonempty("A confirmação de senha é obrigatória!"),
    telephone: z.string().nonempty("telefone é obrigatório!").min(13, "No mínimo 13 caracteres!").max(13, "No máximo 13 caracteres!")
})
.refine((data) => data.password === data.confirmPassword, {
    message: "As senhas nao coincidem",
    path: ["confirmPassword"]
})

export const updateSchema = z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    confirmPassword: z.string().optional(),
    telephone: z.string().optional(),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "As senhas nao coincidem",
    path: ["confirmPassword"]
})

export type clientDataUpdate = z.infer<typeof updateSchema>
export type RegisterData = z.infer<typeof RegisterSchema>
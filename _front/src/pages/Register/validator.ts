import {z} from "zod"

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  )

export const RegisterSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório!"),
    email: z.string().nonempty("Email é obrigatório!").email("Insira email válido").max(127),
    password: z.string().nonempty("Senha é obrigatória!"),
    telephone: z.string().nonempty("telefone é obrigatório").regex(phoneRegex, "Número Invalido!")
})

export type RegisterData = z.infer<typeof RegisterSchema>
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import { RegisterData, RegisterSchema } from "./validator"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

export const Register = () => {

    const { register, handleSubmit, formState:{errors} } = useForm<RegisterData>({
        resolver: zodResolver(RegisterSchema)
    })

    const {registerClient} = useAuth()

    return (
        <main>  
            <div>
                <h1>Cadastro</h1>
                <form onSubmit={handleSubmit(registerClient)}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" {...register("name")}/>
                    {errors.name?.message && <p>{errors.name.message}</p>}

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email")}/>
                    {errors.email?.message && <p>{errors.email.message}</p>}

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register("password")}/>
                    {errors.password?.message && <p>{errors.password.message}</p>}

                    <label htmlFor="telephone">Telephone</label>
                    <input type="tel" id="telephone" {...register("telephone")}/>
                    {errors.telephone?.message && <p>{errors.telephone.message}</p>}

                    <button type="submit">Criar</button>
                    <Link to={"/"}>Já possui uma conta? Faça o login</Link>
                </form>
            </div>
        </main>
    )
}
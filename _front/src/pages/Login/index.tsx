import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginData, loginSchema } from "./validator"
import { useAuth } from "../../hooks/useAuth"

export const Login = () => { 

    const { register, handleSubmit, formState:{errors} } = useForm<LoginData>({
        resolver: zodResolver(loginSchema)
    })

    const {signIn} = useAuth()

    return (
        <main>  
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(signIn)}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email")}/>
                    {errors.email?.message && <p>{errors.email.message}</p>}

                    <label htmlFor="Password">Password</label>
                    <input type="password" id="password" {...register("password")}/>
                    {errors.password?.message && <p>{errors.password.message}</p>}

                    <button type="submit">Entrar</button>
                </form>
            </div>
        </main>
    )
}
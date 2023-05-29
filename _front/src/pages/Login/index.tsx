import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginData, loginSchema } from "./validator"
import { useAuth } from "../../hooks/useAuth"
import { StyledLogin } from "./styledLogin"
import { Link } from "react-router-dom"

export const Login = () => { 

    const { register, handleSubmit, formState:{errors} } = useForm<LoginData>({
        resolver: zodResolver(loginSchema)
    })

    const {signIn} = useAuth()

    return (
        <StyledLogin>  
            <div className="div-form">
                <h1>Login</h1>
                <form onSubmit={handleSubmit(signIn)}>
                    <label htmlFor="email">Email</label>
                    {errors.email ?
                    <input className="input-error" type="email" id="email" placeholder="Digite seu email..." {...register("email")}/>
                    :
                    <input type="email" id="email" placeholder="Digite seu email..." {...register("email")}/>
                    }       
                    {errors.email?.message && <p>{errors.email.message}</p>}

                    <label htmlFor="Password">Password</label>
                    {errors.password ?
                    <input className="input-error" type="password" id="password" placeholder="Digite sua senha..." {...register("password")}/>
                    :
                    <input type="password" id="password" placeholder="Digite sua senha..." {...register("password")}/>
                    }
                    {errors.password?.message && <p>{errors.password.message}</p>}

                    <button type="submit">Entrar</button>
                    <span>Ainda não tem uma conta?</span>
                    <Link to={"/register"}>Faça o Cadastro</Link>
                </form>
            </div>
        </StyledLogin>
    )
}
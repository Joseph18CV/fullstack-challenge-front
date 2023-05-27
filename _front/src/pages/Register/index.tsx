import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import { RegisterData, RegisterSchema } from "./validator"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { StyledRegister } from "./styledRegister"

export const Register = () => {

    const { register, handleSubmit, formState:{errors} } = useForm<RegisterData>({
        resolver: zodResolver(RegisterSchema)
    })

    const {registerClient} = useAuth()

    return (
        <>
        <StyledRegister>
            <div className="div-form">
                <h1>Cadastro</h1>
                <form noValidate onSubmit={handleSubmit(registerClient)}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Digite seu nome de usuário..." {...register("name")}/>
                    {errors.name?.message && <p>{errors.name.message}</p>}

                    <label htmlFor="email">Email</label>
                    <div className="example">Exemplo: mateus@gmail.com</div>
                    <input type="email" id="email" placeholder="Digite seu email..." {...register("email")}/>
                    {errors.email?.message && <p>{errors.email.message}</p>}

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Digite sua senha..."{...register("password")}/>
                    {errors.password?.message && <p>{errors.password.message}</p>}

                    <label htmlFor="telephone">Telephone</label>
                    <div className="example">Exemplo: +5541993275562</div>
                    <div className="div-input-tel">
                        <span className="more">+</span>
                        <input className="input-tel" type="tel" id="telephone" placeholder="Digite seu número de telefone..."{...register("telephone")}/>
                    </div>
                    {errors.telephone?.message && <p>{errors.telephone.message}</p>}

                    <button type="submit">Criar</button>
                    <span>Já possui uma conta?</span>
                    <Link to={"/"}>Faça o login</Link>
                </form>
            </div>
        </StyledRegister>
        </>
    )
}
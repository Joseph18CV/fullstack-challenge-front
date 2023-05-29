import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import { RegisterData, RegisterSchema } from "./validator"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { StyledRegister } from "./styledRegister"
import { useState } from "react"

export const Register = () => {

    const [valueInput, setValueInput] = useState("")

    const handleInputValue = (event: any) => {
        setValueInput(event.target.value)
    }

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
                    <label htmlFor="name">Nome</label>
                    {errors.name ?
                    <input className="input-error" type="text" id="name" placeholder="Digite seu nome de usuário..." {...register("name")}/>
                    :
                    <input type="text" id="name" placeholder="Digite seu nome de usuário..." {...register("name")}/>
                    }
                    {errors.name?.message && <p>{errors.name.message}</p>}

                    <label htmlFor="email">Email</label>
                    <div className="example">Exemplo: mateus@gmail.com</div>
                    {errors.email ?
                    <input onChangeCapture={handleInputValue} className="input-error" type="email" id="email" placeholder="Digite seu email..." {...register("email")} />
                    :
                    <input type="email" id="email" placeholder="Digite seu email..." {...register("email")}/>
    	            }
                    {errors.email?.message && <p>{errors.email.message}</p>}

                    <label htmlFor="password">Senha</label>
                    {errors.password ?
                    <input className="input-error" type="password" id="password" placeholder="Digite sua senha..."{...register("password")}/>
                    :
                    <input type="password" id="password" placeholder="Digite sua senha..."{...register("password")}/>
                    }
                    {errors.password?.message && <p>{errors.password.message}</p>}

                    <label htmlFor="confirmPassword">Confirme a senha</label>
                    {errors.confirmPassword ?
                    <input className="input-error" type="password" id="confirmPassword" placeholder="Digite sua senha..."{...register("confirmPassword")}/>
                    :
                    <input type="password" id="confirmPassword" placeholder="Digite sua senha..."{...register("confirmPassword")}/>
                    }
                    {errors.confirmPassword?.message && <p>{errors.confirmPassword.message}</p>}

                    <label htmlFor="telephone">Telefone</label>
                    <div className="example">Exemplo: +5541993275562</div>
                    <div className="div-input-tel">
                        <span className="more">+</span>
                        {errors.telephone ?
                        <input className="input-tel input-error" type="tel" id="telephone" placeholder="Digite seu número de telefone..."{...register("telephone")}/>
                        :
                        <input className="input-tel" type="tel" id="telephone" placeholder="Digite seu número de telefone..."{...register("telephone")}/>
                        }   
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
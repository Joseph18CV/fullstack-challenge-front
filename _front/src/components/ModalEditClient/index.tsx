import { useForm } from "react-hook-form"
import { clientDataUpdate, updateSchema } from "../../pages/Register/validator"
import { conUser, useAuth } from "../../hooks/useAuth"
import { zodResolver } from "@hookform/resolvers/zod"
import { StyledModalEditClient } from "./styledModalEditClient"
import { useEffect } from "react"

export const ModalUpdateClient = () => {

    const { register, handleSubmit, formState:{errors}, reset } = useForm<clientDataUpdate>({
        resolver: zodResolver(updateSchema)
    })

    const {userUpdate, setIsOpenModalUpdate, isOpenModalUpdate} = conUser()
    const {clients} = useAuth()

    useEffect(() => {
        if(clients){
            reset({name: clients.name, email: clients.email, telephone: clients.telephone})
        }

    }, [isOpenModalUpdate])

    return (
        <StyledModalEditClient>
            <div className="container">
                <button className="button-x" onClick={() => setIsOpenModalUpdate(false)}>X</button>
                <h2>Editar usuário</h2>
                <form noValidate onSubmit={handleSubmit(userUpdate)}>
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
                    <input className="input-error" type="email" id="email" placeholder="Digite seu email..." {...register("email")} />
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
                    <button type="submit">Editar</button>
                </form>
            </div>
        </StyledModalEditClient>
    )
}
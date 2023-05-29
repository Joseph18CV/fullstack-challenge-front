import { useForm } from "react-hook-form"
import { StyledModalAddContact } from "./styledModalAddContact"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContactSchema, contactData } from "./validator"
import { conUser } from "../../hooks/useAuth"

export const ModalAddContact = () => {

    const { register, handleSubmit, formState:{errors} } = useForm<contactData>({
        resolver: zodResolver(ContactSchema)
    })

    const {setIsOpenModal, addContact} = conUser()

    return (
        <StyledModalAddContact>
            <div className="container">
                <button className="button-x" onClick={() => setIsOpenModal(false)}>X</button>
                <h2>Adicionar contato</h2>
                <form noValidate onSubmit={handleSubmit(addContact)}>
                    <label htmlFor="name">Nome</label>
                    {errors.name ?
                    <input className="input-error" type="text" id="name" placeholder="Nome do contato" {...register("name")}/>
                    :
                    <input type="text" id="name" placeholder="Nome do contato" {...register("name")}/>
                    }
                    {errors.name?.message && <p>{errors.name.message}</p>}

                    <label htmlFor="email">Email</label>
                    <div className="example">Exemplo: mateus@gmail.com</div>
                    {errors.email ?
                    <input className="input-error" type="email" id="email" placeholder="Email do contato" {...register("email")}/>
                    :
                    <input type="email" id="email" placeholder="Email do contato" {...register("email")}/>
                    }                   
                    {errors.email?.message && <p>{errors.email.message}</p>}

                    <label htmlFor="Telephone">Telefone</label>
                    <div className="example">Exemplo: +5541993275562</div>
                    {errors.telephone ?
                    <input className="input-error" type="tel" id="telephone" placeholder="Telefone do contato" {...register("telephone")}/>
                    :
                    <input type="tel" id="telephone" placeholder="Telefone do contato" {...register("telephone")}/>
                    }
                    {errors.telephone?.message && <p>{errors.telephone.message}</p>}

                    <button type="submit">Criar</button>
                </form>
            </div>
        </StyledModalAddContact>
    )
}
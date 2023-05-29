import { ReactNode, createContext, useState } from "react"
import { api } from "../services/api"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router"
import { contactData } from "../components/ModalAddContact/validator"
import { toast } from "react-toastify"

interface UserProviderProps {
    children: ReactNode
}

interface UserContextValues {
    userDelete: () => Promise<void>
    isOpenModal: boolean
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    addContact: (data: contactData) => void
    contactDelete: (id: any) => void
    isOpenModalDeleteUser: boolean
    setIsOpenModalDeleteuser: React.Dispatch<React.SetStateAction<boolean>>
    isOpenModalDeleteContact: boolean
    setIsOpenModalDeleteContact: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserContext = createContext({} as UserContextValues)

export const UserProvider = ({children}: UserProviderProps) => {
    
    const {clients, contacts} = useAuth()
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenModalDeleteUser, setIsOpenModalDeleteuser] = useState(false)
    const [isOpenModalDeleteContact, setIsOpenModalDeleteContact] = useState(false)

    const userDelete = async () => {
        try {
            await api.delete(`client/${clients?.id}`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            window.localStorage.clear()
            navigate("/")
        } catch (error) {
            console.error(error)
        }
    }

    const contactDelete = async (id: any) => {
        try {
            await api.delete(`contact/${id}`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            location.reload()
        } catch (error) {
            console.error(error)
        }   
    }

    const addContact = async (data: contactData) => {
        try {
            const response = await api.post("/contact", data, {
                headers: {Authorization: `Bearer ${token}`}
            })
            location.reload()
        } catch (error) {
            toast.error("Email ou telefone já em uso!")
            console.error(error)
        }
    }

    return (
        <UserContext.Provider value={{userDelete, isOpenModal, setIsOpenModal, addContact, isOpenModalDeleteUser, setIsOpenModalDeleteuser, contactDelete, setIsOpenModalDeleteContact, isOpenModalDeleteContact}}>
            {children}
        </UserContext.Provider>
    )
}
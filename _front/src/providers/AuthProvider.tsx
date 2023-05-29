import { ReactNode, createContext, useEffect, useState } from "react"
import { LoginData } from "../pages/Login/validator"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { RegisterData } from "../pages/Register/validator"
import { toast } from "react-toastify"

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: LoginData) => void
    registerClient: (data: RegisterData) => void
    logOut: () => void
    contacts: Contacts[]
    clients: Client | undefined
    setContacts: React.Dispatch<React.SetStateAction<Contacts[]>>
    setClients: React.Dispatch<React.SetStateAction<Client | undefined>>
}

export interface Contacts {
    id: number,
    name: string,
    email: string,
    telephone: string
}

export interface Client {
    id: number,
    name: string,
    email: string,
    password: string,
    telephone: string
    contacts: [{id: string}]
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({children}: AuthProviderProps) => {
    const navigate = useNavigate()

    const [contacts, setContacts] = useState<Contacts[]>([])
    const [clients, setClients] = useState<Client>()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token){
            return 
        }
        api.defaults.headers.common.authorization = `Bearer ${token}`
    }, [])

    const signIn = async (data: LoginData) => {
        try {
            const response = await api.post("/login", data)

            const { token } = response.data

            api.defaults.headers.common.authorization = `Bearer ${token}`
            window.localStorage.clear()
            localStorage.setItem("token", token)
            toast.success(`Login realizado com sucesso!`)
            setTimeout(() => {
                navigate("dashboard")
            }, 2000)
        } catch (error: any) {
            toast.error("Email ou senha incorretos!")
            console.error(error)
        }
    }

    const registerClient = async (data: RegisterData) => {
        try {
            const response = await api.post("/client", data)

            window.localStorage.clear()
            toast.success(`Usuário criado com sucesso!`)
            setTimeout(() => {
                navigate("/")
            }, 2000)
        } catch (error) {
            toast.error("Email ou telefone já em uso!")
            console.error(error)
        }
    }

    const logOut = () => {
        localStorage.clear()
        navigate("/")
    }

    return (
        <AuthContext.Provider value={{signIn, registerClient, logOut, clients, contacts, setClients, setContacts}}>
            {children}
        </AuthContext.Provider>
    )
} 
import { ReactNode, createContext, useEffect } from "react"
import { LoginData } from "../pages/Login/validator"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: LoginData) => void
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({children}: AuthProviderProps) => {
    const navigate = useNavigate()

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

            navigate("dashboard")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <AuthContext.Provider value={{signIn}}>
            {children}
        </AuthContext.Provider>
    )
}
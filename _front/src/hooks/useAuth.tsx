import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { UserContext } from "../providers/UserProvider"

export const useAuth = () => {
    const authContext = useContext(AuthContext)

    return authContext
}

export const conUser = () => {
    const userContext = useContext(UserContext)

    return userContext
}
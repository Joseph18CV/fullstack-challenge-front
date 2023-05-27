import { Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Dashboard } from "../pages/Dashboard"
import { NotFound } from "../pages/404"
import { ProtectedRoutes } from "./protectedRoutes"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<ProtectedRoutes/>}>
                <Route index element={<Dashboard/>}/>
            </Route>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    )
}
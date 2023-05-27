import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoutes () {

    const token = localStorage.getItem("token")
    const location = useLocation()

    return token ? <Outlet/> : <Navigate to="/" state={{from: location}}/>
}

export {
    ProtectedRoutes
}
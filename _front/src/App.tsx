import { AuthProvider } from "./providers/AuthProvider"
import { UserProvider } from "./providers/UserProvider"
import { RoutesMain } from "./routes"
import { GlobalStyle } from "./styles/GlobalStyle"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <>
      <GlobalStyle/>
      <AuthProvider>
        <UserProvider>
            <RoutesMain/>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </UserProvider>
      </AuthProvider>
    </>
  )
}

export {
  App
} 

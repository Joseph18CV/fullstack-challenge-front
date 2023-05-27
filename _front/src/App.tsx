import { AuthProvider } from "./providers/AuthProvider"
import { RoutesMain } from "./routes"

function App() {

  return (
    <>
      <AuthProvider>
        <RoutesMain/>
      </AuthProvider>
    </>
  )
}

export {
  App
} 

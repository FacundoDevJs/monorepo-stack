import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { Toaster } from "react-hot-toast"
import AuthProvider from "./context/AuthContext"

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route
        path="/"
        element={
          <HomePage/>
        }/>
      </Routes>
      <Toaster/>
    </AuthProvider>
    </>
  )
}

export default App

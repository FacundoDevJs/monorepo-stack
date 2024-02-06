import toast from "react-hot-toast"
import { useAuth } from "../context/AuthContext"

const HomePage = () => {

  const { sayHello } = useAuth()

  const handleClick = async () => {
    const res = await sayHello()
    toast(() => (
        <div className='text-white text-center font-semibold text-xl px-4 py-2'>
          {res}
        </div>
    ), {
        style:{
            background: "#000",
            boxShadow: "0 10px 15px -3px rgba(255,255,255,0.7), 0 4px 6px -4px rgba(255,255,255,0.7)",
            border: "2px solid white"
        }
    })
  }

  return (
    <div className="w-full min-h-[100vh] bg-black text-white font-semibold flex flex-col items-center pt-24">
      <h1 className="text-5xl p-10">
        Pagina de Inicio
      </h1>
      <button 
      onClick={()=> handleClick()}
      className="text-xl rounded-md border-2 border-white p-5 hover:bg-white hover:text-black m-10 shadow-white/30 shadow-xl">
        Decir Hola!
      </button>
    </div>
  )
}

export default HomePage
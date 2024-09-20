import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"

function App() {

  return (
    <>
      <div className="container mx-auto mt-20">
        {/* Nombre del proyecto */}
        <h1 className="font-black text-3xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de pacientes {''}
          <span className="text-indigo-800">Veterinaria</span>
        </h1>

        {/*  */}
        <div className="mt-12 md:flex">
          <PatientForm />
          <PatientList />
        </div>
      </div>

      {/* Creando las notificaciones */}
      <ToastContainer />
    </>
  )
}

export default App

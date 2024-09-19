import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailProps = {
    patient: Patient
}

export default function PatientDetail({patient}: PatientDetailProps) {
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl border-l-[10px] border-l-indigo-500">
            <PatientDetailItem label="ID" data={patient.id} />
            <PatientDetailItem label="Nombre" data={patient.name} />
            <PatientDetailItem label="Propietario" data={patient.caretaker} />
            <PatientDetailItem label="Correo electronico" data={patient.email} />
            <PatientDetailItem label="Fecha de la cita" data={patient.date.toString()} />
            <PatientDetailItem label="Sintomas" data={patient.symptoms} />

            <div className="flex justify-end gap-5 mt-10">
                {/* Boton de editar */}
                <button
                    type="button"
                    className="py-2 px-10 bg-white border border-indigo-800 hover:bg-indigo-800 text-indigo-600 hover:text-white font-bold uppercase rounded-lg"
                >Editar</button>
                {/* Boton de eliminar */}
                <button
                    type="button"
                    className="py-2 px-10 bg-white border border-red-600 hover:bg-red-600 text-red-600 hover:text-white font-bold uppercase rounded-lg"
                >Eliminar</button>
            </div>
        </div>
    )
}

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
        </div>
    )
}

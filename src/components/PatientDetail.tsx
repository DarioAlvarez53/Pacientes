import { Patient } from "../types"

type PatientDetailProps = {
    patient: Patient
}

export default function PatientDetail({patient}: PatientDetailProps) {
    return (
        <div>
            {patient.name}
        </div>
    )
}

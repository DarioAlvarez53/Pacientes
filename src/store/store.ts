//Aqui van a vivir el state y las acciones de manera global
//La forma de crear un store es importando "create"
import { create } from "zustand"
import { v4 as uuidv4} from 'uuid'
import { DraftPatient, Patient } from "../types"

type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
    return { ...patient, id: uuidv4()}
}

//Aqui se va colocar tanto el state como las funciones que modificaran al state
export const usePatientStore = create<PatientState>((set) => ({  /* aqui se pueden pasar un par de funciones (set, get) set es para ageregar un valor, y get es para recibir un valor */
    patients: [],
    addPatient: (data) => {
        const newPatient = createPatient(data)
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    },

    //Funcion para eliminar un paciente
    deletePatient: (id) => {
        // console.log(id);
        set((state) => ({
            patients: state.patients.filter(patient => patient.id !== id)
        }))
    }
}))
//Aqui van a vivir el state y las acciones de manera global
//La forma de crear un store es importando "create"
import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { v4 as uuidv4} from 'uuid'
import { DraftPatient, Patient } from "../types"

type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
    return { ...patient, id: uuidv4()}
}

//Aqui se va colocar tanto el state como las funciones que modificaran al state
export const usePatientStore = create<PatientState>()(
    devtools((set) => ({  /* aqui se pueden pasar un par de funciones (set, get) set es para ageregar un valor, y get es para recibir un valor */
        patients: [],
        activeId: '',
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
        },

        //Funcion para editar un paciente
        getPatientById: (id) => {
            // console.log(id);
            set(() => ({
                activeId: id
            }))
        },

        //Funcion para actualizar un paciente
        updatePatient: (data) => {
            set((state) => ({
                patients: state.patients.map( patient => patient.id === state.activeId ? {id: state.activeId, ...data} : patient),
                activeId: ''
            }))
        }
    })
))
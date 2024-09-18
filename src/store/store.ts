//Aqui van a vivir el state y las acciones de manera global
//La forma de crear un store es importando "create"
import { create } from "zustand"
import { DraftPatient, Patient } from "../types"

type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
}

//Aqui se va colocar tanto el state como las funciones que modificaran al state
export const usePatientStore = create<PatientState>(() => ({
    patients: [],
    addPatient: (data) => {
        console.log(data);
        
    }
}))
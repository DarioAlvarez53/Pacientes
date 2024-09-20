//importando useForm de react-hook-form
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Errors from './Errors';
import { DraftPatient } from '../types';
import { usePatientStore } from '../store/store';

export default function PatientForm() {

    const addPatient = usePatientStore(state => state.addPatient)
    const activeId = usePatientStore(state => state.activeId)
    const patients = usePatientStore(state => state.patients)
    const updatePatient = usePatientStore(state => state.updatePatient)

    //Mandando a llamar a useForm
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<DraftPatient>()

    //Revisar cuando activeId tenga algo
    useEffect(() => {
        if(activeId) {
            const activePatient = patients.filter( patient => patient.id === activeId)[0]

            // console.log(activePatient);
            //setValue lo que hace es que nos deja retornar los valores al formulario
            setValue('name', activePatient.name)
            setValue('caretaker', activePatient.caretaker)
            setValue('email', activePatient.email)
            setValue('date', activePatient.date)
            setValue('symptoms', activePatient.symptoms)
            
        }
    }, [activeId])

    const registerPatient = (data: DraftPatient) => {
        if(activeId) {
            updatePatient(data)
            //Notificacion flotante cuando se actualice un registro
            toast.info('Paciente actualizado correctamente')
        } else {
            addPatient(data)
            //Notificacion flotante cuando se agregue un nuevo registro
            toast.success('Paciente registrado correctamente')
        }
        //Una vez que se agrega al paciente el formulario se resetea
        reset()
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente 
                    </label>
                    <input  
                        id="name"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Nombre del Paciente" 
                        //Aqui es donde se ingresa el register de useForm
                        {...register('name', {
                            required: 'EL nombre del paciente es obligatorio'
                        })}
                    />
                    {errors.name && (
                        <Errors>
                            {errors.name?.message}
                        </Errors>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Propietario 
                    </label>
                    <input  
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Nombre del Propietario"
                        //Aqui es donde se ingresa el register de useForm
                        {...register('caretaker', {
                            required: 'El propietario es obligatorio'
                        })}
                    />
                    {errors.caretaker && (
                        <Errors>
                            {errors.caretaker?.message}
                        </Errors>
                    )}
                </div>

                <div className="mb-5">
                <label htmlFor="email" className="text-sm uppercase font-bold">
                    Email 
                </label>
                <input  
                    id="email"
                    className="w-full p-3  border border-gray-100"  
                    type="email" 
                    placeholder="Email de Registro" 
                    {...register("email", {
                        required: "El Email es Obligatorio",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email No Válido'
                        }
                    })} 
                />
                {errors.email && (
                    <Errors>
                        {errors.email?.message}
                    </Errors>
                )}
            </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta 
                    </label>
                    <input  
                        id="date"
                        className="w-full p-3  border border-gray-100"  
                        type="date"
                        //Aqui es donde se ingresa el register de useForm
                        {...register('date', {
                            required: 'La fecha de alta es obligatoria'
                        })}
                    />
                    {errors.date && (
                        <Errors>
                            {errors.date?.message}
                        </Errors>
                    )}
                </div>
                
                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                    Síntomas 
                    </label>
                    <textarea  
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"  
                        placeholder="Síntomas del paciente"
                        //Aqui es donde se ingresa el register de useForm
                        {...register('symptoms', {
                            required: 'Los sintomas son obligatorios'
                        })}
                    />
                    {errors.symptoms && (
                        <Errors>
                            {errors.symptoms?.message}
                        </Errors>
                    )}
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
                    value={activeId ? "Actualizar registro" : "Guardar paciente"}
                />
            </form> 
        </div>
    )
}

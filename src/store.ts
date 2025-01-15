import { create } from 'zustand';
import { v4 as uuid4 } from 'uuid';
import { DraftPatient, Patient } from './interfaces';

interface PatientState {
  patients: Patient[];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient['id']) => void;
}

const createPatient = (patient: DraftPatient): Patient => { //The function createPatient converts a DraftPatient object into a Patient object by adding a unique identifier (id).
  return { ...patient, id: uuid4() };
};

export const usePatientStore = create<PatientState>((set) => ({
  patients: [],
  addPatient: (data) => {
    const newPatient = createPatient(data);
    set((state) => ({
      patients: [...state.patients, newPatient],
    }));
  },

  deletePatient: (id) => {
    set((state) => ({
      patients: state.patients.filter((patient) => patient.id !== id),
    }));
  },
}));

/**
 * The create function from Zustand is a factory to create a store.
    - By passing the generic type <PatientState>, we explicitly define the structure of the store's state and its methods.
    - This improves type safety, making the state predictable and avoiding runtime errors.
 */

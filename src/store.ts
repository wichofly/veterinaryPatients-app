import { create } from 'zustand';
import { v4 as uuid4 } from 'uuid';
import { DraftPatient, Patient } from './interfaces';

interface PatientState {
  patients: Patient[];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient['id']) => void;
}

const createPatient = (patient: DraftPatient): Patient => {
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

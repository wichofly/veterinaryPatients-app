import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { v4 as uuid4 } from 'uuid';
import { toast } from 'react-toastify';
import { DraftPatient, Patient } from '../interfaces';

interface PatientState {
  patients: Patient[];
  activeId: Patient['id'];
  addPatient: (data: DraftPatient) => void;
  editPatient: (id: Patient['id']) => void;
  updatePatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient['id']) => void;
}

const createPatient = (patient: DraftPatient): Patient => {
  //The function createPatient converts a DraftPatient object into a Patient object by adding a unique identifier (id).
  return { ...patient, id: uuid4() };
};

export const usePatientStore = create<PatientState>()(
  devtools(
    persist(
      (set) => ({
        patients: [],
        activeId: '',

        addPatient: (data) => {
          const newPatient = createPatient(data);
          set((state) => ({
            patients: [...state.patients, newPatient],
          }));
          toast.success('Patient Added');
        },

        editPatient: (id) => {
          set(() => ({
            activeId: id,
          }));
        },

        updatePatient: (data) => {
          set((state) => ({
            patients: state.patients.map((patient) =>
              patient.id === state.activeId
                ? { id: patient.id, ...data }
                : patient
            ),
            activeId: '',
          }));
          toast.info('Patient Updated');
        },

        deletePatient: (id) => {
          set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id),
          }));
          toast('Patient Deleted', {
            position: 'top-center',
            type: 'error',
          });
        },
      }),
      {
        name: 'patient-storage',
      }
    )
  )
);

/**
 * The create function from Zustand is a factory to create a store.
    - By passing the generic type <PatientState>, we explicitly define the structure of the store's state and its methods.
    - This improves type safety, making the state predictable and avoiding runtime errors.
 */

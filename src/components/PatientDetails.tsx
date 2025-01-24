import { Patient } from '../interfaces';
import { usePatientStore } from '../store';
import PatientDetailItem from './PatientDetailItem';

interface PatientDetailsProps {
  patient: Patient;
}

const PatientDetails = ({ patient }: PatientDetailsProps) => {
  // const deletePatient = usePatientStore((state) => state.deletePatient);
  const { editPatient, deletePatient } = usePatientStore();

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Name" data={patient.name} />
      <PatientDetailItem label="Caretaker" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Entry Date" data={patient.date.toString()} />
      <PatientDetailItem label="Symptoms" data={patient.symptom} />

      <div className="flex flex-col gap-3 lg:flex-row justify-between mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 text-white font-semibold uppercase rounded-lg hover:bg-indigo-700"
          onClick={() => editPatient(patient.id)}
        >
          Edit
        </button>
        <button
          className="py-2 px-10 bg-red-600 text-white font-semibold uppercase rounded-lg hover:bg-red-700"
          onClick={() => deletePatient(patient.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;

/* Coding with Zustand:
 * const { editPatient, deletePatient } = usePatientStore();
  This component will be dependent on usePatientStore. Meaning that every time that value in the store changes, the component will be rerender.

 * const deletePatient = usePatientStore((s) => s.deletePatient);
  Better approach is to use a "selector (s or what ever)" to select our update function. So, the component is only dependent on the Function not dependent on usePatientStore.
  Anything else changes, this component does not care.  

 */

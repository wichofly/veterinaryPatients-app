import { Patient } from '../interfaces';
import PatientDetailItem from './PatientDetailItem';

interface PatientDetailsProps {
  patient: Patient;
}

const PatientDetails = ({ patient }: PatientDetailsProps) => {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Name" data={patient.name} />
      <PatientDetailItem label="Caretaker" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Entry Date" data={patient.date.toString()} />
      <PatientDetailItem label="Symptoms" data={patient.symptom} />

      <div className="flex justify-between mt-10">
        <button className="py-2 px-10 bg-indigo-600 text-white font-semibold uppercase rounded-lg hover:bg-indigo-700">
          Edit
        </button>
        <button className="py-2 px-10 bg-red-600 text-white font-semibold uppercase rounded-lg hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;

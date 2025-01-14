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
    </div>
  );
};

export default PatientDetails;

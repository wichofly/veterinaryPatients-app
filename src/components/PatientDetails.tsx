import { Patient } from '../interfaces';

interface PatientDetailsProps {
  patient: Patient;
}

const PatientDetails = ({ patient }: PatientDetailsProps) => {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <p className="font-semibold mb-3 text-zinc-800 uppercase">
        ID: <span className="font-normal normal-case">{patient.id}</span>
      </p>

      <p className="font-semibold mb-3 text-zinc-800 uppercase">
        Name: <span className="font-normal normal-case">{patient.name}</span>
      </p>

      <p className="font-semibold mb-3 text-zinc-800 uppercase">
        Caretaker:{' '}
        <span className="font-normal normal-case">{patient.caretaker}</span>
      </p>
    </div>
  );
};

export default PatientDetails;

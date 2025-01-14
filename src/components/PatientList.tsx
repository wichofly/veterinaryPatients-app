import { usePatientStore } from '../store';

const PatientList = () => {
  const { patients } = usePatientStore();
  console.log(patients);

  return (
    <div className="">
      {patients.length ? (
        <p>Patient</p>
      ) : (
        <>
          <h2 className="font-semibold text-3xl text-center">
            There are not Patients
          </h2>{' '}
          <p className="text-xl mt-5 mb-10 text-center">
            Patients Added{' '}
            <span className="text-indigo-600 font-semibold">Here</span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientList;

import { useForm } from 'react-hook-form';
import Error from './Error';
import { DraftPatient } from '../interfaces';
import { usePatientStore } from '../store';

const PatientForm = () => {
  // const addPatient = usePatientStore(state => state.addPatient ) // this one can be used as well.
  const { addPatient } = usePatientStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DraftPatient>();

  const registerPatient = (data: DraftPatient) => {
    addPatient(data);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-semibold text-3xl text-center">Patient monitoring</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and{' '}
        <span className="text-indigo-600 font-semibold">Manage</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-semibold">
            Patient
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-2 border border-gray-100"
            placeholder="Patient's name"
            {...register('name', { required: 'Patient name is required' })}
          />
          {errors.name && <Error>{errors.name?.message}</Error>}
        </div>

        <div className="mb-5">
          <label
            htmlFor="caretaker"
            className="text-sm uppercase font-semibold"
          >
            Caretaker
          </label>
          <input
            id="caretaker"
            type="text"
            className="w-full p-2 border border-gray-100"
            placeholder="Caretaker's name"
            {...register('caretaker', {
              required: 'Caretaker name is required',
            })}
          />
          {errors.caretaker && <Error>{errors.caretaker.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 border border-gray-100"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email not Valid',
              },
            })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-semibold">
            Release date
          </label>
          <input
            id="date"
            type="date"
            className="w-full p-2 border border-gray-100"
            {...register('date', { required: 'Date is required' })}
          />
          {errors.date && <Error>{errors.date.message}</Error>}{' '}
        </div>

        <div className="mb-5">
          <label htmlFor="symptom" className="text-sm uppercase font-semibold">
            Symptoms
          </label>
          <textarea
            id="symptom"
            className="w-full p-3  border border-gray-100"
            placeholder="Patient symptoms"
            {...register('symptom', { required: 'Symptoms are required' })}
          />
          {errors.symptom && <Error>{errors.symptom.message}</Error>}{' '}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-2 text-white uppercase font-semibold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
          value="Save Patient"
        />
      </form>
    </div>
  );
};

export default PatientForm;

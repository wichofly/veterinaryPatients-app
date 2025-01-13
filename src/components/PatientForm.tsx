import { useForm } from 'react-hook-form';
import Error from './Error';

const PatientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerName = () => {
    console.log('New Patient');
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
        onSubmit={handleSubmit(registerName)}
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
          {errors.name && <Error>{errors.name?.message as string}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="owner" className="text-sm uppercase font-semibold">
            Owner Name
          </label>
          <input
            id="owner"
            type="text"
            className="w-full p-2 border border-gray-100"
            placeholder="Patient's name"
          />
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
          />
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-semibold">
            Release date
          </label>
          <input
            id="date"
            type="date"
            className="w-full p-2 border border-gray-100"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptom" className="text-sm uppercase font-semibold">
            Symptoms
          </label>
          <textarea
            id="symptom"
            className="w-full p-3  border border-gray-100"
            placeholder="Patient symptoms"
          ></textarea>
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

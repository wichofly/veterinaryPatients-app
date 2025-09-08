import PatientForm from '../components/PatientForm';
import PatientList from '../components/PatientList';
import { useUserStore } from '../store/userStore';

const DashboardPage = () => {
  const { logout } = useUserStore();

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col gap-5 lg:flex-row justify-between items-center">
        {' '}
        <h1 className="font-semibold text-5xl text-center md:w-2/3 md:mx-auto text-zinc-800">
          Patient tracking <span className="text-emerald-700">Veterinary</span>
        </h1>
        <button
          onClick={() => logout()}
          className="mt-5 bg-emerald-600 px-4 py-2 rounded-lg text-white hover:bg-emerald-700"
        >
          Logout
        </button>
      </div>

      <div className="mt-12 md:flex">
        <PatientForm />
        <PatientList />
      </div>
    </div>
  );
};

export default DashboardPage;

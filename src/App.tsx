import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';

function App() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="font-semibold text-5xl text-center md:w-2/3 md:mx-auto text-zinc-800">
        Patient tracking <span className="text-emerald-700">Veterinary</span>
      </h1>

      <div className="mt-12 md:flex">
        <PatientForm />
        <PatientList />
      </div>
    </div>
  );
}

export default App;

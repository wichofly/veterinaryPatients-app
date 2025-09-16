import LoginForm from '../auth/LoginForm';
import vetHospital from '../assets/vetPatient.png';

const LoginPage = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl w-full p-4">
        <LoginForm />
        <img
          src={vetHospital}
          alt="Vet Hospital"
          className="max-h-60 md:max-h-72 lg:max-h-96 w-auto"
        />
      </div>
    </div>
  );
};

export default LoginPage;

import LoginForm from '../auth/LoginForm';
import vetHospital from '../assets/vetPatient.png';

const LoginPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-4">
      <LoginForm />;
      <img
        src={vetHospital}
        alt="Vet Hospital"
        className="max-h-60 lg:max-h-96 md:max-h-72 w-auto"
      />
    </div>
  );
};

export default LoginPage;

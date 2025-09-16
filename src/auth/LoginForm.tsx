import { useForm } from 'react-hook-form';
import { useUserStore } from '../store/userStore';
import Error from '../components/Error';
import { useNavigate } from 'react-router-dom';
import DemoUsers from '../components/DemoUsers';

interface LoginFormProps {
  username: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>();
  const { login, clearError } = useUserStore();
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormProps) => {
    login(data.username, data.password);
    navigate('/', { replace: true });
  };

  return (
    <div className="container mx-auto mt-10 md:w-1/2 lg:w-1/3">
      <h2 className="font-semibold text-3xl text-center mb-5">
        Welcome to Veterinary Patient Tracking
      </h2>

      <h2 className="font-semibold text-2xl text-center text-indigo-600 mb-5">
        Login
      </h2>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-5">
          <input
            id="username"
            type="text"
            className="w-full p-2 border border-gray-100"
            placeholder="Username"
            {...register('username', { required: 'Username is required' })}
            onFocus={clearError}
          />
          {errors.username && <Error>{errors.username.message}</Error>}
        </div>

        <div className="mb-5">
          <input
            id="password"
            type="password"
            className="w-full p-2 border border-gray-100"
            placeholder="Password"
            {...register('password', { required: 'Password is required' })}
            onFocus={clearError}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-2 text-white uppercase font-semibold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
          value="Login"
        />
      </form>

      <DemoUsers />
    </div>
  );
};

export default LoginForm;

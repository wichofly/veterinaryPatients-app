import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

const demoUsers = [
  { username: 'Pablo', envPassword: import.meta.env.VITE_PABLO_PASS },
  { username: 'Amelia', envPassword: import.meta.env.VITE_AMELIA_PASS },
];

const UsersInfo = () => {
  const { login } = useUserStore();
  const navigate = useNavigate();

  const handleLogin = (username: string, envPassword: string) => {
    login(username, envPassword);
    navigate('/', { replace: true });
  };

  return (
    <details
      className="border border-transparent open:border-black/10 open:bg-white p-3 rounded-lg"
      open
    >
      <summary className="leading-6 font-semibold text-gray-900 select-none cursor-pointer">
        Demo Vet Users
      </summary>
      <div className="mt-3 space-y-2">
        {demoUsers.map((user) => (
          <button
            key={user.username}
            className="w-full text-left p-2 bg-indigo-100 hover:bg-indigo-200 rounded-md transition-colors"
            onClick={() => handleLogin(user.username, user.envPassword)}
          >
            Login as <span className="font-semibold">{user.username}</span>
          </button>
        ))}
      </div>
      <p className="text-gray-500 mt-2 text-sm">
        Click to log in directly as a demo user.
      </p>
    </details>
  );
};

export default UsersInfo;

import { create } from 'zustand';
import { v4 as uuid4 } from 'uuid';
import { User } from '../interfaces';
import { toast } from 'react-toastify';
import { persist } from 'zustand/middleware';

interface UserState {
  users: User[];
  currentUser: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
  clearError: () => void;
}

const initialUsers: User[] = [
  { id: uuid4(), username: 'Pablo', password: import.meta.env.VITE_PABLO_PASS },
  {
    id: uuid4(),
    username: 'Amelia',
    password: import.meta.env.VITE_AMELIA_PASS,
  },
  { id: uuid4(), username: 'Admin', password: import.meta.env.VITE_ADMIN_PASS },
];

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      users: initialUsers,
      currentUser: null,

      login: (username, password) => {
        const user = get().users.find(
          (u) => u.username === username && u.password === password
        );
        if (!user) {
          toast.error('Login failed');
          return false;
        }

        set({ currentUser: user });
        toast.success(`Welcome, ${user.username}!`);
        return true;
      },

      logout: () => {
        const user = get().currentUser;

        set({ currentUser: null });
        toast.info(`Logged out, bye ${user?.username}!`);
      },

      clearError: () => {
        toast.dismiss();
      },
    }),
    { name: 'user-storage' }
  )
);

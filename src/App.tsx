import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useUserStore } from './store/userStore';
import LoginPage from './routes/LoginPage';
import DashboardPage from './routes/DashboardPage';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useUserStore();
  return currentUser ? <>{children}</> : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

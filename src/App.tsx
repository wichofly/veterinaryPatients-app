import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DashboardPage from './routes/DashboardPage';
import LoginPage from './routes/LoginPage';
import { useUserStore } from './store/userStore';

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

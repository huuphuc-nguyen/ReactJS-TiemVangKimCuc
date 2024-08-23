import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../features/auth/authSlice';

const PrivateRoute = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
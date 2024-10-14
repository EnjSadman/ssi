import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: JSX.Element;
}

export default function PrivateRoute({ element } : PrivateRouteProps) {
  const isAuthenticated = sessionStorage.getItem('auth');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return element;
};



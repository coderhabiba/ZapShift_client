
import { Navigate } from 'react-router';
import useAuth from './../hooks/useAuth';
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>
      
    </div>
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>
  }

  return children;
};

export default PrivateRoute;
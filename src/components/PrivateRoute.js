import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute= ()=> {

    const auth= localStorage.getItem('auth');
  return  !auth? <Navigate to='/' />:<Outlet />;
  
};

export default PrivateRoute;



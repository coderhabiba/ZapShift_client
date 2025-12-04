import { Outlet } from 'react-router';
import Logo from '../components/Logo/Logo';
import authImg from '../../src/assets/authImage.png';

const AuthLayout = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'white', marginTop: '50px' }}
    >
      <div className="lg:max-w-[1500px] max-w-[90%] mx-auto">
        <div className="text-2xl">
          <Logo />
        </div>
        <div className="flex items-center">
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
          <div className="flex-1 bg-[#fafdf0]">
            <img src={authImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

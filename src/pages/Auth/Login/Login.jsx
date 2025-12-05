import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();

  const handleLogin = data => {
    console.log(data);
    signInUser(data.email, data.password)
      .then(res => {
        console.log(res.user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="card max-w-md shrink-0 ml-44 mt-20">
        <div className="card-body">
          <h2 className="mb-1 text-[42px] font-extrabold text-[#000000]">
            Welcome Back
          </h2>
          <p className="mb-5 text-[16px]">Login with ZapShift</p>
          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
              <label className="label text-[14px] font-medium text-[#0f172a]">
                Email
              </label>
              <input
                type="email"
                {...register('email', { required: true })}
                className="input bg-transparent w-full rounded-md"
                placeholder="Email"
              />
              {errors.email?.type === 'required' && (
                <p className="text-red-500">Email is required</p>
              )}
              <label className="label text-[14px] font-medium text-[#0f172a]">
                Password
              </label>
              <input
                type="password"
                {...register('password', {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/,
                })}
                className="input bg-transparent w-full mb-3 rounded-md"
                placeholder="Password"
              />
              {errors.password?.type === 'required' && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === 'minLength' && (
                <p className="text-red-500">
                  Password must be 6 characters or longer
                </p>
              )}
              {errors.password?.type === 'pattern' && (
                <p className="text-red-500">
                  password must have at least one uppercase, one lowercase, one
                  special character
                </p>
              )}
              <div>
                <a className="link link-hover text-[16px] text-[#71717a] mb-3">
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-primary mb-4 border-0 text-black rounded-md">
                Login
              </button>
              <p className="text-[16px] text-[#71717a]">
                Don’t have any account?{' '}
                <Link to={"/register"} className="text-[#8FA748] underline">Register</Link>
              </p>
              
            </fieldset>
          </form>
          <SocialLogin/>
        </div>
      </div>
    </div>
  );
};

export default Login;

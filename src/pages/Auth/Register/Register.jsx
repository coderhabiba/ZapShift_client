import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser } = useAuth();
  const handleRegistration = data => {
    console.log(data);
    registerUser(data.email, data.password)
      .then(res => {
        console.log(res.user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-sm shrink-0 ml-44 mt-20">
      <form onSubmit={handleSubmit(handleRegistration)}>
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

          {/* password */}
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
            Register
          </button>
          <p className="text-[16px] text-[#71717a]">
            Already have an account?{' '}
            <Link to={'/login'}>
              <span className="text-[#8FA748]">Login</span>
            </Link>
          </p>
          <p className="text-center text-[#71717a] text-lg">Or</p>

          <button className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-[#e9ecf1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-5 h-5"
            >
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3A13 13 0 1 1 24 11a12.8 12.8 0 0 1 8.3 3l5.7-5.7A21.9 21.9 0 0 0 24 2 22 22 0 1 0 46 24c0-1.2-.1-2.3-.4-3.5z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.9A13 13 0 0 1 24 11V2A22 22 0 0 0 6.3 14.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 46a22 22 0 0 0 15.1-5.8l-6.9-5.7A13 13 0 0 1 12.9 29l-6.6 5.1A22 22 0 0 0 24 46z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3a13 13 0 0 1-22.4 6.5l-6.6 5.1A22 22 0 0 0 24 46c12.2 0 22-9.8 22-22 0-1.2-.1-2.3-.4-3.5z"
              />
            </svg>

            <span className="text-sm font-medium text-black">
              Login with Google
            </span>
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;

import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate()
  console.log('in register',location);
  

  const handleRegistration = data => {
    console.log(data);
    const profileImage = data.photo[0];
    createUser(data.email, data.password)
      .then(res => {
        console.log(res.user);

        // 1. store the image in form data
        const formData = new FormData();
        formData.append('image', profileImage);
        
        // 2. send the photo to store and get the url
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;
        axios.post(image_API_URL, formData).then(res => {
          console.log('after image upload', res.data.data.url)

          // update user profile to firebase
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          }
          updateUserProfile(userProfile)
            .then(() => {
              console.log('user profile update')
              navigate(location.state || '/')
            })
          .catch(error => console.log(error)
          )
        })
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-sm shrink-0 ml-44 mt-20">
      <h2 className="mb-1 text-[42px] font-extrabold text-[#000000]">
        Create an Account
      </h2>
      <p className="mb-5 text-[16px]">Register with ZapShift</p>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* name field */}
          <label className="label text-[14px] font-medium text-[#0f172a]">
            Name
          </label>
          <input
            type="text"
            {...register('name', { required: true })}
            className="input bg-transparent w-full rounded-md"
            placeholder="Your Name"
          />
          {errors.name?.type === 'required' && (
            <p className="text-red-500">Name is required</p>
          )}

          {/* photo file */}
          <label className="label text-[14px] font-medium text-[#0f172a]">
            Photo
          </label>
          <input
            type="file"
            {...register('photo', { required: true })}
            className="bg-transparent w-full rounded-md file-input"
            placeholder="Your Photo"
          />
          {errors.photo?.type === 'required' && (
            <p className="text-red-500">Photo is required</p>
          )}

          {/* email field */}
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

          <button
            type="submit"
            className="btn btn-primary mb-4 border-0 text-black rounded-md"
          >
            Register
          </button>
          <p className="text-[16px] text-[#71717a]">
            Already have an account?{' '}
            <Link state={location.state} to={'/login'}>
              <span className="text-[#8FA748] underline">Login</span>
            </Link>
          </p>
        </fieldset>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Register;

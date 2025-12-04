
const Login = () => {
  return (
    <div>
      <div className="card w-full max-w-sm shrink-0 ml-44 mt-20">
        <div className="card-body">
          <h2 className="mb-1 text-[42px] font-extrabold text-[#000000]">
            Welcome Back
          </h2>
          <p className="mb-5 text-[16px]">Login with ZapShift</p>
          <fieldset className="fieldset">
            <label className="label text-[14px] font-medium text-[#0f172a]">
              Email
            </label>
            <input
              type="email"
              className="input bg-transparent w-full rounded-md"
              placeholder="Email"
            />
            <label className="label text-[14px] font-medium text-[#0f172a]">
              Password
            </label>
            <input
              type="password"
              className="input bg-transparent w-full mb-3 rounded-md"
              placeholder="Password"
            />
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
              <span className="text-[#8FA748]">Register</span>
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
        </div>
      </div>
    </div>
  );
};

export default Login;

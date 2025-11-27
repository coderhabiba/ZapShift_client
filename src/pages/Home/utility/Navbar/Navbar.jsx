import { NavLink } from "react-router";
import Logo from "../../../../components/Logo/Logo";
import { FaArrowUp } from "react-icons/fa6";

const Navbar = () => {
  const links = <>
    <li className="text-[16px] text-[#606060] font-medium"><NavLink to={'/'}>Services</NavLink></li>
    <li className="text-[16px] text-[#606060] font-medium"><NavLink to={'/coverage'}>Coverage</NavLink></li>
    <li className="text-[16px] text-[#606060] font-medium"><NavLink to={'/'}>About Us</NavLink></li>
    <li className="text-[16px] text-[#606060] font-medium"><NavLink to={'/'}>Pricing</NavLink></li>
    <li className="text-[16px] text-[#606060] font-medium"><NavLink to={'/'}>Be a Rider</NavLink></li>
  </>
  return (
    <div className="navbar bg-white rounded-2xl lg:px-8 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:h-5 h-4 lg:w-5 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm bg-white dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="md:text-2xl text-xs text-secondary">
          <Logo />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end lg:gap-4 gap-1">
        <a className="btn text-[#606060] bg-transparent rounded-xl lg:text-xl lg:p-7 border border-[#dadada] font-bold">
          Sign In
        </a>
        <div className="flex items-center">
          <a className="btn btn-primary text-secondary font-bold lg:text-xl lg:p-7 rounded-xl border-0">
            Be a rider
          </a>
          <div className="hidden w-14 h-14 bg-secondary text-primary rounded-full lg:flex items-center justify-center">
            <FaArrowUp className="rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

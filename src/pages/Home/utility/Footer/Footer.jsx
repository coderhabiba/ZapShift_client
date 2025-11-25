import { NavLink } from "react-router";
import Logo from "../../../../components/Logo/Logo";
import facebook from "../../../../assets/icons/facebook.png";
import linkedin from "../../../../assets/icons/linkedin.png";
import x from "../../../../assets/icons/x.png";
import youtube from "../../../../assets/icons/youtube.png";
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center text-[#dadada] bg-[#0b0b0b] py-20 lg:px-24 rounded-4xl">
      <aside>
        <div className="text-white md:text-2xl text-xs mb-4">
          <Logo />
        </div>
        <p className="text-[16px]">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle.From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
        <p>
          Copyright © {new Date().getFullYear()} - ZapShift All right reserved
        </p>
      </aside>

      <nav className="border-y border-dashed border-[#03464d] py-8 w-full">
        <div className="grid grid-flow-col gap-4">
          <NavLink>Services</NavLink>
          <NavLink>Coverage</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Contact</NavLink>
        </div>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4 items-center">
          <NavLink className={'w-9 h-9'}>
            <img className="w-full h-full" src={linkedin} alt="linkedin" />
          </NavLink>
          <NavLink className={'w-7 h-7'}>
            <img className="w-full h-full" src={x} alt="x" />
          </NavLink>
          <NavLink className={'w-7 h-7'}>
            <img className="w-full h-full" src={facebook} alt="facebook" />
          </NavLink>
          <NavLink className={'w-7 h-7'}>
            <img className="w-full h-full" src={youtube} alt="youtube" />
          </NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

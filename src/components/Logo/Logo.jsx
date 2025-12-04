import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-end">
        <img
          className="md:w-9 w-4 md:h-12 h-6"
          src="https://i.ibb.co.com/fBwhssx/logo.png"
          alt=""
        />
        <p className="lg:-ml-4 -ml-2 font-extrabold">ZapShift</p>
      </div>
    </Link>
  );
};

export default Logo;

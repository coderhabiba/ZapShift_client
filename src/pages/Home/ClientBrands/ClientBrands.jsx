import brand1 from '../../../assets/brands/casio.png';
import brand2 from '../../../assets/brands/amazon.png';
import brand3 from '../../../assets/brands/moonstar.png';
import brand4 from '../../../assets/brands/star.png';
import brand5 from '../../../assets/brands/start_people.png';
import brand6 from '../../../assets/brands/randstad.png';
import Marquee from 'react-fast-marquee';
const ClientBrands = () => {
  return (
    <div className="my-[100px] flex flex-col justify-center items-center">
      <h2 className="mb-10 text-[28px] font-extrabold text-center">
        We've helped thousands of sales teams
      </h2>
      <Marquee gradient={false} speed={50}>
        <div className="flex justify-between items-center space-x-28">
          <img src={brand1} alt="Brand 1" className="h-6 ml-28" />
          <img src={brand2} alt="Brand 2" className="h-6" />
          <img src={brand3} alt="Brand 3" className="h-6" />
          <img src={brand4} alt="Brand 4" className="h-6" />
          <img src={brand5} alt="Brand 5" className="h-6" />
          <img src={brand6} alt="Brand 6" className="h-6" />
        </div>
      </Marquee>
    </div>
  );
};

export default ClientBrands;

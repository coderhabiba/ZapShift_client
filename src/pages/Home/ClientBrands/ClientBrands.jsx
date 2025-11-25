import brand1 from "../../../assets/brands/casio.png";
import brand2 from "../../../assets/brands/amazon.png";
import brand3 from "../../../assets/brands/moonstar.png";
import brand4 from "../../../assets/brands/star.png";
import brand5 from "../../../assets/brands/start_people.png";
import brand6 from "../../../assets/brands/randstad.png";
const ClientBrands = () => {
  return (
    <div className="my-[100px] flex flex-col justify-center items-center">
      <h2 className="mb-10 text-[28px] font-extrabold text-center">We've helped thousands of sales teams</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center text-center">
        <img src={brand1} alt="" /><img src={brand2} alt="" /><img src={brand3} alt="" /><img src={brand4} alt="" /><img src={brand5} alt="" /><img src={brand6} alt="" />
      </div>
    </div>
  );
};

export default ClientBrands;
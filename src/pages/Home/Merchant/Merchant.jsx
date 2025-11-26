import location from '../../../assets/location-merchant.png';
import bgImg from '../../../assets/be-a-merchant-bg.png';


const Merchant = () => {
  return (
    <div
      className="bg-secondary rounded-4xl p-20 flex flex-col lg:flex-row justify-between items-center mb-20"
      style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
    >
      <div className='lg:mb-0 mb-10'>
        <h2 className="text-[40px] font-extrabold text-white">
          Merchant and Customer Satisfaction <br /> is Our First Priority
        </h2>
        <p className="mt-4 mb-8 text-base text-[#dadada]">
          We offer the lowest delivery charge with the highest value along with{' '}
          <br />
          100% safety of your product. Pathao courier delivers your parcels in
          every <br /> corner of Bangladesh right on time.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <button className="bg-primary text-secondary text-xl font-bold px-8 py-4 rounded-full">
            Become a Merchant
          </button>
          <button className="rounded-full text-primary border border-primary text-xl font-bold px-8 py-4">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
      <div>
        <img src={location} alt="" />
      </div>
    </div>
  );
};

export default Merchant;
import cardIcon from "../../../assets/service.png";
const ServiceCard = ({ title, description }) => {
    return (
      <div className={`hover:bg-primary hover:text-[#0A2E36] bg-white text-[#0A2E36] shadow-lg hover:shadow-2xl transition duration-300 py-8 px-6 rounded-3xl h-full flex flex-col items-center text-center`}
      >
        <div className="w-20 h-20 bg-linear-to-t to-[#eeedfc] from-[#eeedfc00] rounded-full flex items-center justify-center">
          <div className="w-10 h-10">
            <img
              src={cardIcon}
              alt="Service Icon"
              className="w-full h-full flex justify-center items-center rounded-full"
            />
          </div>
        </div>

        <h3 className={`text-xl font-bold my-4 `}>{title}</h3>

        <p className={`text-sm`}>{description}</p>
      </div>
    );
};

export default ServiceCard;
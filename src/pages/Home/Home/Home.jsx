import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import Merchant from "../Merchant/Merchant";
import ParcelFeatures from "../ParcelFeatures/ParcelFeatures";
import Services from "../Services/Services";
import ClientBrands from './../ClientBrands/ClientBrands';

const Home = () => {
    return (
      <div>
        <Banner />
        <HowItWorks />
        <Services />
        <ClientBrands />
        <ParcelFeatures />
        <Merchant/>
      </div>
    );
};

export default Home;
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
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
        <ParcelFeatures/>
      </div>
    );
};

export default Home;
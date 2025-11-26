import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import HowItWorks from "../HowItWorks/HowItWorks";
import Merchant from "../Merchant/Merchant";
import ParcelFeatures from "../ParcelFeatures/ParcelFeatures";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import ClientBrands from './../ClientBrands/ClientBrands';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());
const Home = () => {
    return (
      <div>
        <Banner />
        <HowItWorks />
        <Services />
        <ClientBrands />
        <ParcelFeatures />
        <Merchant />
        <Reviews reviewsPromise={reviewsPromise} />
        <FAQ/>
      </div>
    );
};

export default Home;
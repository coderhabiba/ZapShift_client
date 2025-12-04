import { Outlet } from "react-router";
import Navbar from "../pages/Home/utility/Navbar/Navbar";
import Footer from "../pages/Home/utility/Footer/Footer";

const RootLayouts = () => {
    return (
        <div className="lg:max-w-[1500px] max-w-[90%] mx-auto py-[50px]">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayouts;
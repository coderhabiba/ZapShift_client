import { Outlet } from "react-router";
import Navbar from "../pages/Home/utility/Navbar/Navbar";
import Footer from "../pages/Home/utility/Footer/Footer";

const RootLayouts = () => {
    return (
        <div className="max-w-[1500px] mx-auto">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayouts;
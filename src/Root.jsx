import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
         <Navbar></Navbar> 
         <Outlet></Outlet>
         <Footer></Footer>  
        </div>
    );
};

export default Root;
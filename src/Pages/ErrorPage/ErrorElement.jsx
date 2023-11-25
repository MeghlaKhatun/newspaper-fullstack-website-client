import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const ErrorElement = () => {
    return (      
        <div className="mb-8 ">
            <Navbar></Navbar>
            <div className="flex items-center justify-center max-w-7xl mx-auto">
                <img className="w-1/2 " src="https://i.ibb.co/hcQf2NP/12-ass-error-pic.jpg" alt="" />
            </div>
            <div className="flex justify-center mt-4">
           <Link to="/"> <button className="py-2 px-3 bg-red-900 bg-opacity-90 text-white rounded-lg">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorElement;
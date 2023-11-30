import { NavLink,} from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";
import PieChart from "../GooglePieChart/PieChart";
import BarChart from "../../Pages/BarChart/BarChart";
import LineChart from "../../Pages/LineChart/LineChart";


const Dashboard = () => {


    return (
        <div>
            <Navbar></Navbar>
            <div className="flex">
                {/* dashboard side bar */}
                <div className=" md:min-h-screen bg-[#8a2121] text-white">
                    <ul className="p-4 md:p-10 lg:font-semibold space-y-1 md:space-y-2">
                        {
                            <>
                                <li>
                                    <NavLink to="/allUser">
                                    
                                        All-User</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/adminAllArticles">
                                        All-Articles</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/addPublisher">         
                                        Add-Publisher</NavLink>
                                </li>

                            </>

                        }
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/">
                                
                                Home</NavLink>
                        </li>

                    </ul>
                </div>
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <PieChart></PieChart>
                    <BarChart></BarChart>
                    <LineChart></LineChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
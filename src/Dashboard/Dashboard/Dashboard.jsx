import { FaHome,FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";


const Dashboard = () => {


    return (
        <div>
            <Navbar></Navbar>
            <div className="flex">
                {/* dashboard side bar */}
                <div className=" min-h-screen bg-[#8a2121] text-white">
                    <ul className=" p-10 font-semibold space-y-2">
                        {
                            <>
                                <li>
                                    <NavLink className={"flex gap-1 items-center"}  to="/dashboard">
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className={"flex gap-1 items-center"} to="/allUser">
                                    <FaUser></FaUser>
                                        All-User</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard">
                                        All-Articles</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard">         
                                        Add-Publisher</NavLink>
                                </li>

                            </>

                        }
                        <div className="divider"></div>
                        <li>
                            <NavLink className={"flex gap-1 items-center"} to="/">
                                <FaHome></FaHome>
                                Home</NavLink>
                        </li>

                    </ul>
                </div>
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
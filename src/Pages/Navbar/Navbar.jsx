import { Link, NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext);

    //logOut
    const handleSignOut = () => {
        LogOut()
            .then()
            .catch
    }

    return (
        <div className="bg-[#8a2121]">
            <div className="max-w-7xl mx-auto  py-8">

                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

                    <div className="drawer-content flex flex-col">
                        {/* Navbar */}
                        <div className="w-full navbar">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block text-white w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>

                            <a href="/"><img className="h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full" src="https://i.ibb.co/M2NHMKx/logo-removebg-preview.png" alt="" /></a>
                            <div className="flex-1  text-white text-xl font-medium items-end"><a href="/">NewsPaper</a></div>

                            <nav className="flex-none hidden lg:block">
                                <ul className=" flex gap-8  menu-horizontal text-white font-bold text-[16px] ">
                                    {/* Navbar menu content here */}
                                    <li><NavLink to={"/"}>Home</NavLink></li>
                                    <li><NavLink to={"/addArticles"}>AddArticles</NavLink></li>
                                    <li><NavLink to={"/allArticles"}>AllArticles</NavLink></li>
                                    <li><NavLink to={"/subscription"}>Subscription</NavLink></li>
                                    <li><NavLink to={"/myArticles"}>MyArticles</NavLink></li>
                                    <li><NavLink to={"/premiumArticles"}>PremiumArticles</NavLink></li>
                                    <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>

                                    {
                                        user ? <p className="hidden"></p> : <li ><NavLink to={"/registration"}>Registration</NavLink></li>
                                    }

                                    {/* login and logout */}
                                    {
                                        user ?
                                            <div >
                                                <li onClick={handleSignOut} ><NavLink >LogOut</NavLink></li>
                                            </div>
                                            :
                                            <div>

                                                <li className="hover:underline"><NavLink to={"/login"}>LogIn</NavLink></li>
                                            </div>
                                    }
                                </ul>

                            </nav>

                            {/* profile  */}

                            <div className="flex justify-center px-2 overflow-hidden">

                                {
                                    user?.photoURL && <Link to={"/myProfile"}><img src={user?.photoURL} className="w-[30px] h-[30px] rounded-full"/></Link> 
                                }
                            </div>


                        </div>
                        {/* Page content here */}

                    </div>


                    <nav className="drawer-side z-10 ">
                        <li htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay "></li>
                        <ul className="menu py-10 px-4 w-80 gap-3 bg-[#8a2121] text-white">

                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/addArticles"}>AddArticles</NavLink></li>
                            <li><NavLink to={"/allArticles"}>AllArticles</NavLink></li>
                            <li><NavLink to={"/subscription"}>Subscription</NavLink></li>
                            <li><NavLink to={"/myArticles"}>MyArticles</NavLink></li>
                            <li><NavLink to={"/premiumArticles"}>PremiumArticles</NavLink></li>
                            <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
                            {
                                user ? <p className="hidden"></p> : <li ><NavLink to={"/registration"}>Registration</NavLink></li>
                            }
                            {/* login and logout */}
                            {
                                user ?
                                    <div >
                                        <li onClick={handleSignOut}><NavLink >LogOut</NavLink></li>
                                    </div>
                                    :
                                    <div>

                                        <li className="hover:underline"><NavLink to={"/login"}>LogIn</NavLink></li>
                                    </div>
                            }



                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/axiosPublic";

const Login = () => {

    const axiosPublic = useAxiosPublic()
    const { LogIn, googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //LogInUser
        LogIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire(
                    'Log In!',
                    'LogIn Successful',
                    'success'
                )
                navigate(location.state ? location.state : "/")

            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops sorry...',
                    text: (`${error.message}`),
                })
            })
    }


    //google login
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL,
                }
                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate(location.state ? location.state : "/")
                    })
                Swal.fire(
                    'LogIn!',
                    'Google LogIn Successful',
                    'success'
                )
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops sorry...',
                    text: (`${error.message}`),
                })
            })
    }




    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-5xl mx-auto">
                <div className=" flex flex-col-reverse lg:flex-row-reverse gap-6 justify-between items-center mt-10 px-10">
                    <div>
                        <img src="https://i.ibb.co/vs3FmKC/12-ass-login-pic-removebg-preview.png" alt="" />
                    </div>

                    <div>
                        <div className="  p-10 rounded-lg shadow-2xl bg-[#952727]">

                            <h2 className="text-xl md:text-2xl lg:text-3xl text-white text-center font-bold  ">Please Login</h2>

                            <form onSubmit={handleLogIn}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white  text-[18px]">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered text-black" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white text-[18px]">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />
                                </div>


                                <div className="form-control mt-6">
                                    <button className="py-2 md:py-3 border-2  text-white rounded-full font-bold">LogIn</button>
                                </div>
                            </form>

                                
                            {/* GoogleLogIn */}
                            <div className="flex justify-center mt-6">
                                <button onClick={handleGoogleLogIn} className="py-2 md:py-3 px-10 bg-transparent w-full justify-center text-white  border-2 rounded-full font-bold flex items-center gap-3"><FcGoogle className="text-2xl"></FcGoogle> Google Login</button>
                            </div>

                            <p className="text-[16px] mt-4 text-white font-semibold text-center">Do not Have An Account? please <Link className="text-gray-900 hover:underline font-bold" to="/registration">Registration</Link> </p>


                        </div>



                    </div>




                </div>
            </div>
        </div>
    );
};

export default Login;
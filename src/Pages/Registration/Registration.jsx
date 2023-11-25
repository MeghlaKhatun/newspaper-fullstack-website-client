import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {

    const {createUser}=useContext(AuthContext)

    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, password,photo)

        // setVerifyPassword(" ");
        // // verify password condition
        // if (password.length < 6) {
        //     setVerifyPassword(" Password should be at least 6 characters")
        //     return;
        // }
        // else if (!/[A-Z]/.test(password)) {
        //     setVerifyPassword("Password must be one character uppercase");
        //     return;
        // }
        // else if (!/[!@#$%^&*()_+{}[\]:;<>,.?/~\\-]/.test(password)) {
        //     setVerifyPassword("Password must have one character special key word");
        //     return
        // }
        // else if (!term) {
        //     setVerifyPassword("Please fulfil our terms");
        //     return;
        // }

        //createUser
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire(
                    'Registration!',
                    'Registration Successful',
                    'success'
                  )

    
            })
            .catch(error => {
                console.log(error);
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
                <div className=" flex flex-col-reverse lg:flex-row gap-6 justify-between items-center mt-10">
                    <div>
                        <img src="https://i.ibb.co/NVf5tQ0/Mobile-login-removebg-preview.png" alt="" />
                    </div>
 
                        <div>
                            <div className="  p-10 rounded-lg shadow-2xl bg-[#8a2121]">


                                <h2 className="text-xl md:text-2xl lg:text-3xl text-white text-center font-bold  ">Please Registration</h2>

                                <form onSubmit={handleRegistration}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white  text-[18px]">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                    </div>



                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white  text-[18px]">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white text-[18px]">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    </div>

                                    
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white  text-[18px]">Upload Photo</span>
                                        </label>
                                        <input type="file" name="photo" className="text-white" required />
                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="py-2 md:py-4  border-2 text-white rounded-lg font-bold">Registration</button>
                                    </div>
                                </form>
                                <p className="text-[16px] mt-4 text-white font-semibold text-center">Already Have An Account ? please <Link className="text-gray-950 hover:underline" to="/Login">Login</Link> </p>

                            </div>

                        </div>

               


                </div>
            </div>
        </div>
    );
};

export default Registration;
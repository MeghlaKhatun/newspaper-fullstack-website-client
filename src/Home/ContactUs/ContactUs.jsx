import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const ContactUs = () => {
    return (
        <div className="max-w-5xl mx-auto my-4 md:my-8 lg:my-20">
            <h2 className="text-center text-[#8a2121] text-2xl md:text-3xl lg:text-5xl  font-extrabold ">Contact Us</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between px-8 lg:px-0">
                <div className="mt-4 flex-1">
                    <a href="#"><h2 className="md:text-[18px] font-semibold flex gap-2 my-3 items-center"><FaHome className="text-xl md:text-2xl"></FaHome>House 470, Road 06, Mirpur DOHS, Dhaka</h2></a>
                    <a href="#"><h2 className="text-[18px] font-semibold flex gap-2 my-3 items-center"><FaPhoneAlt className="text-2xl"></FaPhoneAlt>+8801785458349</h2></a>
                    <a href="#"><h2 className="text-[18px] font-semibold flex gap-2 my-3 items-center"><FaEnvelope className="text-2xl" ></FaEnvelope>parvin856@gmail.com</h2></a>
                </div>



                <div className="flex-1">

                    <form  className=" w-full py-10 px-10 ">

                        {/*User name and email */}
                        <div className="md:flex gap-2 w-full">
                            <div className="form-control pt-1 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Full Name</span>
                                </label>
                                <input type="text" placeholder="Name" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" required />
                            </div>

                            <div className="form-control pt-1 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Email Address</span>
                                </label>
                                <input type="email" placeholder="Email" className="  border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" required />
                            </div>

                        </div>
        
                        {/* phoneNumber */}

                        <div className="form-control pt-1 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Phone Number</span>
                                </label>
                                <input type="email" placeholder="Email" className="  border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" required />
                            </div>

                        {/* description */}

                        <div className="mb-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Message</span>
                                </label>
                                <textarea name="description" id="" cols="35" rows="5" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" placeholder="Enter Your Message"></textarea>
                            </div>
                        </div>

                        <input type="submit" value="Submit" className="py-3 cursor-pointer md:font-bold  btn-block border bg-[#8a2121] text-white" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;
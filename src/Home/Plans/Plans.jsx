
const Plans = () => {
    return (
        <div className="">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8a2121] text-center mt-8">Plans</h2>
            <div className="max-w-7xl mx-auto bg-black py-10 my-10 "> 
                <div className="grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 gap-6 px-10">

                    <div className="border-4 border-gray-300 h-[500px] lg:h-[450px]">
                        <div className="p-5  flex justify-between items-center">
                            <div>
                                <h2 className="text-xl lg:text-2xl text-white font-bold">Premium Individual</h2>
                            </div>
                            <div>                              
                                <h2 className="text-[18px] lg:text-xl text-center font-medium text-white">Free</h2>
                                <h2 className="text-[17px] font-normal text-white"> For 1 month</h2>
                            </div>
                        </div>

                        <div className="pb-5">
                            <ul className="ml-10 text-white list-disc">
                                <li>1 Premium account</li>
                                <li>Cancel anytime</li>
                                <li>15 hours/month of listening time from our audio books subscriber catalog</li>
                            </ul>
                            <div className="flex justify-center mt-20 px-5">
                                <button className="px-5 bg-gray-400 py-2 w-full text-white font-bold rounded-full">Try free for 1 month</button>
                            </div>
                            <h2 className="text-white mt-5 text-center px-5font-medium">Free for 1 month, then $10.99 per month after. Offer only available if you have not tried Premium before. <span className="underline ">Terms apply</span></h2>
                        </div>

                    </div>






                    <div className="border-4 border-yellow-800 h-[500px] lg:h-[450px]">
                        <div className="p-5  flex justify-between items-center">
                            <div>
                                <h2 className="text-xl lg:text-2xl text-white font-bold">Premium Family</h2>
                            </div>
                            <div>                              
                                <h2 className="text-[18px] lg:text-xl text-center font-medium text-white">$14.99</h2>
                                <h2 className="text-[17px] font-normal text-white">per month</h2>
                            </div>
                        </div>

                        <div className="pb-5">
                            <ul className="ml-10 text-white list-disc">
                                <li>2 Premium account</li>
                                <li>Cancel anytime</li>
                                <li>15 hours/month of listening time from our audio books subscriber catalog (plan manager only)</li>
                            </ul>
                            <div className="flex justify-center mt-20 px-5">
                                <button className="px-5 bg-yellow-800  py-2 w-full text-white font-bold rounded-full">Get Premium Duo</button>
                            </div>
                            <h2 className="text-white mt-5 text-center px-5font-medium">For couples who reside at the same address<span className="underline ">Terms apply</span></h2>
                        </div>

                    </div>






                    <div className="border-4 border-indigo-300 h-[500px] lg:h-[450px]">
                        <div className="p-5  flex justify-between items-center">
                            <div>
                                <h2 className="text-xl lg:text-2xl text-white font-bold">Premium Individual</h2>
                            </div>
                            <div>                              
                                <h2 className="text-[18px] lg:text-xl text-center font-medium text-white">$16.99</h2>
                                <h2 className="text-[17px] font-normal text-white">per month</h2>
                            </div>
                        </div>

                        <div className="pb-5">
                            <ul className="ml-10 text-white list-disc">
                            <li>Up to 6 Premium or Kids accounts</li>
                                <li>Block explicit music</li>
                                Access to Spotify Kids.
                                <li>Cancel anytime</li>
                                <li>15 hours/month of listening time from our audio books subscriber catalog (plan manager only)</li>
                            </ul>
                            <div className="flex justify-center mt-10 px-5">
                                <button className="px-5 bg-indigo-300 py-2 w-full text-white font-bold rounded-full">Get Premium Family</button>
                            </div>
                            <h2 className="text-white mt-5 text-center px-5font-medium">For up to 6 family members residing at the same address. <span className="underline ">Terms apply</span></h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Plans;
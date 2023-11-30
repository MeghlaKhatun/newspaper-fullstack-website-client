const TopNews = () => {
    return (
        <div>
            <div className=" my-4 md:my-8 lg:my-20">
                <h2 className="text-center text-[#8a2121] text-2xl md:text-3xl lg:text-5xl  font-extrabold ">Top News</h2>  
                <div className="bg-black  mt-10" >

                    <div className="lg:flex lg:flex-row-reverse lg:justify-evenly lg:items-center">
                        <div className="lg:w-1/2 hero-overlay">
                            <img src="https://i.ibb.co/WGBQkKx/top-news-1.png" alt="" />
                        </div>

                        <div className="lg:w-1/2 mx-auto ">
                            <div className="lg:w-4/5 mx-auto py-4  px-10 lg:px-0">
                                <h2 className="text-[18px] mb-3 md:text-2xl lg:text-3xl font-bold text-white">Man Utd on brink of CL exit after 3-3 draw at Galatasaray</h2>
                                <h2 className="text-white w-full ">
                                Manchester United twice gave up a two-goal lead in a thrilling 3-3 draw at Galatasaray on Wednesday that just kept alive their slim hopes of reaching the Champions League last 16. Uniteds Alejandro Garnacho, Bruno Fernandes and Scott McTominay scored in a breathless game, but the single point kept Erik ten Hags team in fourth place in Group A on four points after five matches.
                                Uniteds hopes of advancing depend on Wednesdays late game between Bayern Munich (12 points) and Copenhagen (four points) ahead of their final match against the German group winners on Dec. 12.
                                United roared into an early 2-0 lead through Garnacho and Fernandes before Hakim Ziyech pulled one back from a free kick following an error by the English teams goalkeeper Andre Onana.
                                McTominay put United 3-1 up soon after halftime but Ziyech slotted home another free kick under Onanas arm and Muhammed Kerem Akturkoglu equalised for Galatasaray in the 71st minute.
                                </h2>
                               
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default TopNews;
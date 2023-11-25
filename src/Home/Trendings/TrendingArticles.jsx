import { Link } from "react-router-dom";

const TrendingArticles = () => {
    return (
        <div className="bg-black bg-opacity-50 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="h-[40vh] py-3 w-3/5 mx-auto flex flex-col justify-center items-center text-center " >
                            <h2 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quisquam consequatur ad accusamus ipsa reprehenderit minima soluta, odit veniam delectus dolore, porro animi saepe blanditiis nisi deserunt rem quasi aperiam.</h2>
                            <div className="pt-4">
                                <Link to={'/login'}><button className="py-2 text-white font-bold px-10 rounded-tl-3xl  rounded-br-3xl  bg-[#952727]">Details</button></Link>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="h-[40vh] py-3 w-3/5 mx-auto flex flex-col justify-center items-center text-center " >
                            <h2 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quisquam consequatur ad accusamus ipsa reprehenderit minima soluta, odit veniam delectus dolore, porro animi saepe blanditiis nisi deserunt rem quasi aperiam.</h2>
                            <div className="pt-4">
                                <Link to={'/login'}><button className="py-2 text-white font-bold px-10 rounded-tl-3xl  rounded-br-3xl  bg-[#952727]">Details</button></Link>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="h-[40vh] py-3 w-3/5 mx-auto flex flex-col justify-center items-center text-center " >
                            <h2 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quisquam consequatur ad accusamus ipsa reprehenderit minima soluta, odit veniam delectus dolore, porro animi saepe blanditiis nisi deserunt rem quasi aperiam.</h2>
                            <div className="pt-4">
                                <Link to={'/login'}><button className="py-2 text-white font-bold px-10 rounded-tl-3xl  rounded-br-3xl  bg-[#952727]">Details</button></Link>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="h-[40vh] py-3 w-3/5 mx-auto flex flex-col justify-center items-center text-center " >
                            <h2 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quisquam consequatur ad accusamus ipsa reprehenderit minima soluta, odit veniam delectus dolore, porro animi saepe blanditiis nisi deserunt rem quasi aperiam.</h2>
                            <div className="pt-4">
                                <Link to={'/login'}><button className="py-2 text-white font-bold px-10 rounded-tl-3xl  rounded-br-3xl  bg-[#952727]">Details</button></Link>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingArticles;
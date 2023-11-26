import { Link } from "react-router-dom";

const TrendingArticles = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8a2121] text-center mt-8">Trending Articles</h2>
            <p className='text-[16px] font-semibold w-full px-4 md:px-0 md:w-1/2 text-center mx-auto mt-2 mb-8'>A trending topic is a subject that experiences a surge in popularity on one or more social media platforms for a limited duration of time. </p>
            <div className="max-w-7xl mx-auto bg-black bg-opacity-70 text-white my-10">
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
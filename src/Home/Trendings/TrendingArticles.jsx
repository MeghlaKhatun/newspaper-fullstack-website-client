import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TrendingArticles = () => {


    const [trending, setTrending] = useState([]);
    console.log("tranding data", trending)


    useEffect(() => {
        fetch("http://localhost:5000/articles")
            .then(res => res.json())
            .then(data => {
                const sortedData = data?.sort((a, b) => b.viewCount - a.viewCount);

                const topSixTrendingData = sortedData.slice(0, 6);

                setTrending(topSixTrendingData);
            })
            .catch(error => {
                console.error('Error :', error);
            });
    }, []);




    return (


        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8a2121] text-center mt-8">Trending Articles</h2>
            <p className='text-[16px] font-semibold w-full px-4 md:px-0 md:w-1/2 text-center mx-auto mt-2 mb-8'>A trending topic is a subject that experiences a surge in popularity on one or more social media platforms for a limited duration of time. </p>
            <div className="">

                <div className="carousel w-full">


                    {/* slider 1 */}
                    <div id="slide1" className="carousel-item relative w-full">

                        <div className="h-[60vh] py-3 w-3/5 mx-auto flex flex-col justify-center items-center text-center " >
                            <Link to={`/allArticles/${trending[0]?._id}`}>
                                <div className="h-full w-full">
                                    <img className="w-full h-full" src={trending[0]?.image} alt="" />
                                </div>
                            </Link >
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide6" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>


                    {/* slider 2 */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="h-[60vh] py-3 w-3/5 mx-auto flex flex-col justify-center items-center text-center " >
                            <Link to={`/allArticles/${trending[1]?._id}`}>
                                <div className="h-full w-full">
                                    <img className="w-full h-full" src={trending[1]?.image} alt="" />
                                </div>
                            </Link >
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* slider 3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="h-[60vh] py-3 w-3/5 mx-auto flex flex-col justify-center items-center text-center " >
                            <Link to={`/allArticles/${trending[2]?._id}`}>
                                <div className="h-full w-full">
                                    <img className="w-full h-full" src={trending[2]?.image} alt="" />
                                </div>
                            </Link >
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>


                    {/* slider 4 */}

                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="h-[60vh] py-3 w-3/5 mx-auto flex flex-col justify-center items-center text-center " >
                            <Link to={`/allArticles/${trending[3]?._id}`}>
                                <div className="h-full w-full">
                                    <img className="w-full h-full" src={trending[3]?.image} alt="" />
                                </div>
                            </Link >
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>


                    {/* slider 5 */}

                    <div id="slide5" className="carousel-item relative w-full">
                        <div className="h-[60vh] py-3 w-3/5 mx-auto flex flex-col justify-center items-center text-center " >
                            <Link to={`/allArticles/${trending[4]?._id}`}>
                                <div className="h-full w-full">
                                    <img className="w-full h-full" src={trending[4]?.image} alt="" />
                                </div>
                            </Link >
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>
                    </div>


                    {/* slider 6 */}

                    <div id="slide6" className="carousel-item relative w-full">
                        <div className="h-[60vh] py-3 w-3/5 mx-auto flex flex-col justify-center items-center text-center " >
                            <Link to={`/allArticles/${trending[5]?._id}`}>
                                <div className="h-full w-full">
                                    <img className="w-full h-full" src={trending[5]?.image} alt="" />
                                </div>
                            </Link >
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>






                </div>
            </div>
        </div>
    );
};

export default TrendingArticles;
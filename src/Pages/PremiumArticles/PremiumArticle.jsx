import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const PremiumArticle = () => {

    const premiumArticles = useLoaderData();

    return (

        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-10 my-10 px-10 lg:px-0">
                {
                    premiumArticles?.filter((premium) => premium.premium === "Premium").map((data, index) => <div key={index}>

                        <div className=" border-2  md:h-[670px]  shadow-2xl shadow-yellow-800">
                            <div className=' h-3/5'>
                                <img className='w-full h-full rounded-b-full' src={data.image} alt="car!" />
                            </div>
                            <div className="card-body">

                                <h2 className="card-title font-bold text-[18px]">Title: {data.title}</h2>
                                <div className="flex justify-between items-center">
                                    <h2 className="card-title font-bold text-[18px]">Publisher: {data.publisher}</h2>
                                    <h2 className="card-title font-bold text-[16px] bg-slate-600 text-white py-1 px-4 rounded-full">Premium Article</h2>
                                </div>

                                {
                                    data?.description.length > 200 ? <p className='font-medium text-[15px]'>{data.description.slice(0, 200)}.........</p> : <p className='font-medium text-[15px]'>{data.description}</p>
                                }
                                <div className="pt-4 flex justify-center">
                                    <Link to={`/allArticles/${data._id}`}>
                                        <button className="py-2 md:py-3 text-white font-bold px-10 rounded-tl-3xl  rounded-br-3xl  bg-yellow-800">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default PremiumArticle;
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import useAxiosPublic from "../../hooks/axiosPublic";
import { useEffect } from "react";


const Details = () => {

    const axiosPublic = useAxiosPublic()
    const details = useLoaderData();
    const { _id, title, name, tag, description, image } = details;



    const count = 1;
    const viewCount = { count }
    console.log(viewCount);

    useEffect(() => {
        axiosPublic.patch(`/articles/viewCount/${_id}`, viewCount)
            .then(res => {
                console.log(res.data);
            })
    }, [axiosPublic, _id,viewCount])








    return (
        <div>
            <Navbar></Navbar>
            <div className="hero  bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/WcPfPzK/banner-1.jpg)' }}>
                <div className="max-w-3xl mx-auto py-10 rounded-lg px-10">
                    <div className="card bg-base-100 shadow-2xl shadow-gray-500">
                        <div className="w-full">
                            <img className="w-full rounded-t-lg" src={image}
                            />
                        </div>
                        <div className="card-body">
                            <h2 className="text-[18px] md:text-xl font-semibold"><span className="font-bold">Title:</span> {title}</h2>
                            <h2 className="text-[18px] md:text-xl font-semibold"><span className="font-bold">Publisher:</span>  {name}</h2>
                            <h2 className="text-[18px] md:text-xl font-semibold"><span className="font-bold">Tag:</span>  {tag}</h2>
                            <p className="font-normal text-[15px]">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
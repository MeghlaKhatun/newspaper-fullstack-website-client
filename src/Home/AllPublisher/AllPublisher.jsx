import { useEffect, useState } from "react";


const AllPublisher = () => {

    const [publisher, setPublisher] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/publisher")
            .then(res => res.json())
            .then(data => {
                setPublisher(data)
            })
    }, [])
    return (
        <div className="max-w-7xl mx-auto my-4 md:my-8 lg:my-20">
            <h2 className="text-center text-[#8a2121] text-2xl md:text-3xl lg:text-5xl  font-extrabold ">All Publisher</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    publisher?.map(data => <div key={data._id}>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="px-10 pt-10">
                                <img src={data.publisherLogo} alt="Shoes" className="rounded-xl" />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{data.publisherName}</h2>
                                
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllPublisher;
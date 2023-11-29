import { useLoaderData } from "react-router-dom";
import AllArticle from './AllArticle';
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

const AllServices = () => {
    const allArticles = useLoaderData();
    const [filteredAllArticles, setFilteredArticles] = useState([]);


    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.text.value.trim().toLowerCase();
        const filter = allArticles.filter(
            (allArticle) =>
                allArticle.title.toLowerCase().indexOf(search) !== -1 
        );

        setFilteredArticles(filter);
    };

    useEffect(() => {
        setFilteredArticles(allArticles);
    }, [allArticles]);



    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 my-10 px-10">
                {/* search functionality */}
                <form onSubmit={handleSearch} className="mx-auto">
                    <div className="mt-10">
                        <input
                            className="text-black border border-[#8a2121] outline-none rounded-lg py-3 md:py-4 pl-4 pr-[40px] md:pr-[200px] lg:pr-[350px]"
                            type="text"
                            placeholder="Search here...."
                            name="text"
                            id=""
                        />
                    </div>
                    <div className="md:absolute mt-4 md:mt-[-57px] flex justify-center  md:ml-[272px] lg:ml-[422px]">
                        <input
                            className="bg-[#8a2121] text-[16px] font-semibold py-2 md:py-4 px-10 cursor-pointer text-white rounded-r-none md:rounded-r-lg "
                            type="submit"
                            value="Search"
                        />
                    </div>
                </form>
            </div>

            {/* all approved articles */}
        
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-10 my-10 px-10 lg:px-0">
            {
                filteredAllArticles?.filter((article)=>article.status === "Approve").map((data, index)=><AllArticle key={index} data={data}></AllArticle>)
            }
            </div>

        </div>
    );
};

export default AllServices;




